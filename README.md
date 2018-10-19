# drachtio-webrtc-reference-client

This project contains a reference web application that is intended to connect to simple-drachtio-registrar app. 
The purpose of this app is to test Drachtio and WebRTC.

### To run the client on the browser
Open your web browser to:<br>
https://andrewvmail.github.io/drachtio-webrtc-reference-client/?username=bob<br>
https://andrewvmail.github.io/drachtio-webrtc-reference-client/?username=mary<br>
Without the username url parameter client will user auth username from config<br>

### To build and run the client locally
```
npm install -g ionic 
git clone https://github.com/andrewvmail/drachtio-webrtc-reference-client
cd drachtio-webrtc-reference-client
npm install 
ionic serve
```

### To run simple-drachtio-registrar
```
git clone https://github.com/davehorton/simple-drachtio-registrar
cd simple-drachtio-registrar
node app.js
```

## To build and run drachtio
See https://github.com/davehorton/drachtio-server/tree/develop
or get going fast at digitalocean https://gist.github.com/andrewvmail/4d1034ff19b123565375f8681c6f7556
