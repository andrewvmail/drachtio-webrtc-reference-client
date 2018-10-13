import { ModalPage } from "../pages/in-call-modal/in-call-modal";
import config from '../config'

export function register({ sip, state, path }) {
  return new Promise((resolve, reject) => {
    const server = state.get("settings.server");
    const domain = state.get("settings.domain");
    const authUsername = state.get("settings.username");
    const password = state.get("settings.password");
    const username = state.get("username");
    sip.connect(
      {
        uri: (username || authUsername) + "@" + domain,
        wsServer: "ws://" + server,
        authorizationUser: authUsername,
        password: password
      },
      (error, result) => {
        if (error) {
          return resolve(path.error());
        }
        resolve(path.next());
      }
    );
  });
}

export function unregister({ sip, state, path }) {
  sip.unregister();
  state.set("registered", false);
}

export function call({ sip, state, path }) {
  return new Promise((resolve, reject) => {
    const domain = state.get("settings.domain");
    const toCall = state.get("toCall");
    sip.invite(
      toCall + "@" + domain,
      {
        sessionDescriptionHandlerOptions: {
          constraints: {
            audio: true,
            video: false
          }
        }
      },
      (error, result) => {
        if (error) {
          return resolve(path.error());
        }
        resolve(path.next());
      }
    );
  });
}

export function decideWhatToDo({ state, path }) {
  const lastDialed = state.get("lastDialed");
  const toCall = state.get("toCall");

  if (!toCall && !lastDialed) {
    return path.doNothing();
  }
  if (!toCall && lastDialed) {
    return path.setToCallWithLastRedialed();
  }
  if (toCall) {
    return path.call();
  }

  return path.doNothing();
}

export function checkSettings({ state, path, toast }) {
  const iceServers = state.get("settings.iceServers");
  if(iceServers === []) {
    state.push('settings.iceServers', config.defaultIceServers )
  }
  let error = false
  iceServers.forEach(server => {
    if (server.url.indexOf("stun:") === -1 && server.url.indexOf("turn:") === -1) {
      error = true
    }
  });
  if(error) {
    toast.show('Check your settings and ice configuration')
    return path.checkSettings();
  }
  return path.next()
}

export function openInCallModal({ modal }) {
  modal.create(ModalPage);
}

export function setCallName({ state, props }) {
  state.set("call.name", props.name.split("@")[0] || "Unknown");
}

export function answer({ sip }) {
  sip.answer();
}

export function hangup({ sip, state }) {
  const type = state.get("call.type");
  const connected = state.get("call.connected");
  if (type === "incoming") {
    if (!connected) {
      sip.reject();
    } else {
      sip.hangup();
    }
  } else {
    if (connected) {
      sip.hangup();
    } else {
      sip.cancel();
    }
  }
}

export function closeModal({ modal }) {
  modal.close();
}
