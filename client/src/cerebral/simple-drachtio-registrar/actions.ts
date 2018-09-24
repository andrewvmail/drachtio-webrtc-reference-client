export function register({ sip, state, path }) {
  return new Promise((resolve, reject) => {
    const server = state.get("simpleDrachtioRegistrar.settings.server");
    const domain = state.get("simpleDrachtioRegistrar.settings.domain");
    const authUsername = state.get("simpleDrachtioRegistrar.settings.username");
    const password = state.get("simpleDrachtioRegistrar.settings.password");
    const username = state.get("simpleDrachtioRegistrar.username");
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
  state.set("simpleDrachtioRegistrar.registered", false);
}

export function call({ sip, state, path }) {
  return new Promise((resolve, reject) => {
    const domain = state.get("simpleDrachtioRegistrar.settings.domain");
    const toCall = state.get("simpleDrachtioRegistrar.toCall");
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
  const lastDialed = state.get("simpleDrachtioRegistrar.lastDialed");
  const toCall = state.get("simpleDrachtioRegistrar.toCall");

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

export function shouldRegister({ path }) {
  return path.register();
}
