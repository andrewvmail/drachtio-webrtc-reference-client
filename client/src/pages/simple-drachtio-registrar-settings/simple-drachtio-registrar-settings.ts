import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { IonicPage } from "ionic-angular";

import { NavController } from "ionic-angular";
import {
  connect,
  ControllerService,
  CerebralComponent
} from "@cerebral/angular";
import { signal, state } from "cerebral/tags";

@Component({
  selector: "page-simple-drachtio-registrar-settings",
  templateUrl: "simple-drachtio-registrar-settings.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  domain: state(["simpleDrachtioRegistrar.settings.domain"]),
  username: state(["simpleDrachtioRegistrar.settings.username"]),
  password: state(["simpleDrachtioRegistrar.settings.password"]),
  autoRegister: state(["simpleDrachtioRegistrar.autoRegister"]),
})
export class SimpleDrachtioRegistrarSettingsPage extends CerebralComponent {
  // ua;
  // userId;
  // toCall;
  // session;
  // domain = "127.0.0.1";

  constructor(
    // public navCtrl: NavController,
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
    // console.log(controller)
    // console.log(controller)
  }

  // ngOnDestroy() {}
  //
  // ngOnInit() {}
  //
  // ngAfterViewInit() {}
  //
  // ngOnChanges() {}
  //
  // register() {
  //   this.ua = new SIP.UA({
  //     uri: this.userId + "@" + this.domain,
  //     transportOptions: {
  //       wsServers: ["ws://" + this.domain]
  //     },
  //     register: true
  //   });
  //
  //   this.ua.on("invite", function(session) {
  //     this.trackAdded(session);
  //     session.accept();
  //   });
  // }
  //
  // unregister() {
  //   this.ua.unregister();
  // }
  //
  // call() {
  //   this.session = this.ua.invite(this.toCall + "@" + this.domain, {
  //     sessionDescriptionHandlerOptions: {
  //       constraints: {
  //         audio: true,
  //         video: false
  //       }
  //     }
  //   });
  //   this.trackAdded(this.session);
  // }
  //
  // trackAdded(session) {
  //   session.on("trackAdded", function() {
  //     var remoteAudio: any = document.getElementById("remoteAudio");
  //
  //     var pc = session.sessionDescriptionHandler.peerConnection;
  //     var remoteStream;
  //
  //     remoteStream = pc.getRemoteStreams()[0];
  //
  //     remoteAudio.srcObject = remoteStream;
  //     remoteAudio.volume = 1;
  //     remoteAudio.play();
  //   });
  // }
}
