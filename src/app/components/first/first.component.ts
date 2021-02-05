import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  myName: string = 'Robert';
  myAge: number = 43;
  isOld: boolean = false;

  inputValue: string = "my value";

  myImg: string="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"; 

  constructor() { }

  onButtonClick() {
    this.myAge = 18;
  }

  onButtonEnter() {
    this.myAge = 28;
  }

  onButtonLeave() {
    this.myAge = 43;
  }

  onSubmit() {
    console.log(this.inputValue);
  }
  
}
