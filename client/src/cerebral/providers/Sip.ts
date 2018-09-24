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
  let sessions = {};

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
      ua.transport.on("invite", (session) => {
        session.accept()
        this.context.controller.runSignal("onInvite", onInvite);
      });
    },
    unregister() {
      if(ua.isRegistered()) {
        ua.unregister()
      }
    },
    invite(target, options, cb) {
      try {
        let session = ua.invite(target, options);

        const call_id = session.request.call_id;

        session.target = target;
        sessions[call_id] = session;

        const { controller } = this.context;

        session.onInfo = request =>
          controller.runSignal("onInfo", onInfo, { request });

        session.on("trackAdded", function() {
          var remoteAudio: any = document.getElementById("remoteAudio");

          var pc = session.sessionDescriptionHandler.peerConnection;
          var remoteStream;

          remoteStream = pc.getRemoteStreams()[0];

          remoteAudio.srcObject = remoteStream;
          remoteAudio.volume = 1;
          remoteAudio.play();
        });

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

        cb(null, call_id);
      } catch (error) {
        console.log(error);
        cb("error: " + error);
      }
    },
    terminate(call_id, cb) {
      try {
        const session = sessions[call_id];
        session.terminate();
        cb();
      } catch (error) {
        cb(error);
      }
    }
  });
}
