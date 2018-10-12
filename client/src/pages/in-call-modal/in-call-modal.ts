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
  selector: "page-in-call-modal",
  templateUrl: "in-call-modal.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  name: state(["call.name"]),
  connected: state(["call.connected"]),
  type: state(["call.type"]),
  answer: signal(["answer"]),
  hangup: signal(["hangup"]),
})
export class ModalPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService,
    public viewCtrl: ViewController,
  ) {
    super(cdr, controller);
  }
}
