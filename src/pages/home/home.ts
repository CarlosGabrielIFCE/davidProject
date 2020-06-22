import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firstNumber;
  secondNumber;
  result;

  constructor(public navCtrl: NavController) {

  }

  add() {
    this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

  sub() {
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
  }

  mult() {
    this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }

  div() {
    this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }

}
