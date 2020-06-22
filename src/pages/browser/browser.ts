import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {
  url;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public inAppBrowser: InAppBrowser) {
  }

  openUrl() {
    this.inAppBrowser.create(this.url, '_self').show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');
  }

}
