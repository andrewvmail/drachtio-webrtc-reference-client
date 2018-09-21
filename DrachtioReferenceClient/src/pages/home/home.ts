import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import SIP from 'sip.js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ua
  userId
  toCall
  session
  domain = '127.0.0.1'

  constructor(public navCtrl: NavController) {
    console.log(SIP)

  }


  register () {
    this.ua = new SIP.UA({
      uri: this.userId + '@' + this.domain,
      transportOptions: {
        wsServers: ['ws://' + this.domain]
      },
      register: true
    });

  }

  unregister () {
    this.ua.unregister()
  }


  call() {
    this.session = this.ua.invite(this.toCall + '@' + this.domain);
  }






}
