import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  connect,
  ControllerService,
  CerebralComponent
} from "@cerebral/angular";
import { state, signal } from "cerebral/tags";

@Component({
  selector: "page-dialer",
  templateUrl: "dialer.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  name: state(["username"]),
  authUsername: state(["settings.username"]),
  toCall: state(["toCall"]),
  registered: state(["registered"]),
  call: signal(["call"]),
  register: signal(["register"]),
  unregister: signal(["unregister"]),
  saveInput: signal(["saveInput"])
})
export class DialerPage extends CerebralComponent {
  constructor(
    public cdr: ChangeDetectorRef,
    public controller: ControllerService
  ) {
    super(cdr, controller);
  }
}
