# drachtio-webrtc-reference-client

This project contains a reference web application that connects to Drachtio sample apps. It's purpose is to test Drachtio and WebRTC compatibility.

This application is built with
- Cordova/Angular/Ionic for the view layer
- Cerebral.js for state management and control flow

## To run the client

Open your web browser to :
https://andrewvmail.github.io/drachtio-webrtc-reference-client/?username=bob
https://andrewvmail.github.io/drachtio-webrtc-reference-client/?username=mary

# To run simple-drachtio-registrar node app
```
git clone https://github.com/davehorton/simple-drachtio-registrar
cd simple-drachtio-registrar
node app.js
```

# To run drachtio-simple-server node app
```
git clone https://github.com/davehorton/drachtio-simple-server
cd drachtio-simple-server
npm install
cp config/default.json.example config/default.json
./lib/plugins/authenticate-test.js ./lib/plugins/your-authenticator-here.js
./lib/plugins/registrar-test.js ./lib/plugins/registrar.js
npm start
```

# To build and run drachtio
See https://github.com/davehorton/drachtio-server/tree/develop

## Todo
- drachtio-simple-server
- ios and android builds

![alt text](https://user-images.githubusercontent.com/2431354/46010022-22f5ad00-c076-11e8-8f10-f7fabbc83942.gif)
