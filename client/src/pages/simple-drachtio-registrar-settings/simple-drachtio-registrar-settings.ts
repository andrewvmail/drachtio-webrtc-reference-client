import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import SIP from "sip.js";

@Component({
  selector: "page-simple-drachtio-registrar-settings",
  templateUrl: "simple-drachtio-registrar-settings.html"
})
export class SimpleDrachtioRegistrarSettingsPage {
  ua;
  userId;
  toCall;
  session;
  domain = "127.0.0.1";

  constructor(public navCtrl: NavController) {
    console.log(SIP);
  }

  register() {
    this.ua = new SIP.UA({
      uri: this.userId + "@" + this.domain,
      transportOptions: {
        wsServers: ["ws://" + this.domain]
      },
      register: true
    });

    this.ua.on("invite", function(session) {
      this.trackAdded(session);
      session.accept();
    });
  }

  unregister() {
    this.ua.unregister();
  }

  call() {
    this.session = this.ua.invite(this.toCall + "@" + this.domain, {
      sessionDescriptionHandlerOptions: {
        constraints: {
          audio: true,
          video: false
        }
      }
    });
    this.trackAdded(this.session);
  }

  trackAdded(session) {
    session.on("trackAdded", function() {
      var remoteAudio: any = document.getElementById("remoteAudio");

      var pc = session.sessionDescriptionHandler.peerConnection;
      var remoteStream;

      remoteStream = pc.getRemoteStreams()[0];

      remoteAudio.srcObject = remoteStream;
      remoteAudio.volume = 1;
      remoteAudio.play();
    });
  }
}
