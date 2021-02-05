import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // dataArr: string[] = [];
  dataArr: Array<string> = [
    'Katarzyna',
    'Krzysztof',
    'Michał'
  ];

  isElementVisible: boolean = true; //taka zmienna

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.isElementVisible = !this.isElementVisible;
  }


}


