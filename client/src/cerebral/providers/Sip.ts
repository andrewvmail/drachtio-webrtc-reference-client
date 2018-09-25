import SIP from "sip.js";

const EVENT_NAMES_TO_SIGNAL = [
  { event: "accepted", sequence: "onAccepted" },
  { event: "rejected", sequence: "onRejected" },
  { event: "failed", sequence: "onFailed" },
  { event: "connecting", sequence: "onConnecting" },
  { event: "terminated", sequence: "onTerminated" },
  { event: "cancel", sequence: "onCancel" },
  { event: "refer", sequence: "onRefer" },
  { event: "bye", sequence: "onBye" },
  { event: "progress", sequence: "onProgress" },
  { event: "dtmf", sequence: "onDtmf" }
  // { event: "muted", sequence: "onMuted" },
  // { event: "unmuted", sequence: "onUnmuted" }
];

import { Provider } from "cerebral";

export default function Sip({
  onAccepted,
  onRejected,
  onFailed,
  onConnecting,
  onTerminated,
  onCancel,
  onRefer,
  onBye,
  onProgress,
  onDtmf,
  // onMuted,
  // onUnmuted,
  onInfo,
  onInvite
}) {
  let ua;
  let session;

  const sequences = {
    onAccepted,
    onRejected,
    onFailed,
    onConnecting,
    onTerminated,
    onCancel,
    onRefer,
    onBye,
    onProgress,
    onDtmf
    // onMuted,
    // onUnmuted
  };

  return Provider({
    connect({ uri, wsServer, password, authorizationUser }, cb) {
      try {
        ua = new SIP.UA({
          uri,
          transportOptions: {
            wsServers: [wsServer]
          },
          authorizationUser,
          password,
          register: true
        });
      } catch (error) {
        console.error(error);
        cb("disconnected");
      }

      ua.transport.on("connected", transport => {
        console.log("connected");
        cb();
      });
      ua.transport.on("connecting", connecting => {
        console.log("connecting");
      });
      ua.transport.on("disconnected", disc => {
        console.log("disconnected");
        cb("disconnected");
      });
      ua.on("invite", sess => {
        session = sess;

        session.on("cancel", () => {
          this.context.controller.runSignal("onCancel", onCancel);
        });
        session.on("terminate", () => {
          this.context.controller.runSignal("onTerminated", onTerminated);
        });
        session.on("bye", () => {
          this.context.controller.runSignal("onBye", onBye);
        });

        this.context.controller.runSignal("onInvite", onInvite, {
          name:
            session.request.from.displayName ||
            session.request.from.friendlyName
        });
      });
    },
    attachEvents(session, controller) {
      EVENT_NAMES_TO_SIGNAL.map((action: any) => {
        session.on(action.event, (response, cause) => {
          controller.runSignal(action.event, sequences[action.sequence], {
            response:
              response && response.method === "BYE"
                ? ""
                : response && response.data
                  ? response.data
                  : "",
            cause: cause || ""
          });
        });
      });
    },
    unregister() {
      if (ua.isRegistered()) {
        ua.unregister();
      }
    },
    answer() {
      try {
        session.accept();
      } catch (error) {
        console.log("error answering");
      }
    },
    invite(target, options, cb) {
      try {
        let sess = ua.invite(target, options);

        const call_id = sess.request.call_id;

        session = sess;

        this.attachEvents(session, this.context.controller);

        session.onInfo = request =>
          this.context.controller.runSignal("onInfo", onInfo, { request });

        session.on("trackAdded", function() {
          var remoteAudio: any = document.getElementById("remoteAudio");

          var pc = session.sessionDescriptionHandler.peerConnection;
          var remoteStream;

          remoteStream = pc.getRemoteStreams()[0];

          remoteAudio.srcObject = remoteStream;
          remoteAudio.volume = 1;
          remoteAudio.play();
        });

        cb(null, call_id);
      } catch (error) {
        console.log(error);
        cb("error invite");
      }
    },
    hangup() {
      try {
        session.bye();
      } catch (error) {
        console.log("error hanging up");
      }
    },
    reject() {
      try {
        session.reject();
      } catch (error) {
        console.log("error rejecting");
      }
    },
    cancel() {
      try {
        session.cancel();
      } catch (error) {
        console.log("error cancelling", error);
      }
    }
  });
}
