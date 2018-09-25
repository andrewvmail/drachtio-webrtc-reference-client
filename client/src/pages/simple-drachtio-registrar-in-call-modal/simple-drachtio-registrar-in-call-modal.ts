import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  connect,
  ControllerService,
  CerebralComponent
} from "@cerebral/angular";
import { state, signal } from "cerebral/tags";
import { ViewController, NavParams } from "ionic-angular"

@Component({
  selector: "page-simple-drachtio-registrar-in-call-modal",
  templateUrl: "simple-drachtio-registrar-in-call-modal.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  name: state(["simpleDrachtioRegistrar.call.name"]),
  connected: state(["simpleDrachtioRegistrar.call.connected"]),
  type: state(["simpleDrachtioRegistrar.call.type"]),
  answer: signal(["simpleDrachtioRegistrar.answer"]),
  hangup: signal(["simpleDrachtioRegistrar.hangup"]),
})
export class SimpleDrachtioRegistrarInCallModalPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService,
    public viewCtrl: ViewController,
  ) {
    super(cdr, controller);
  }
}
