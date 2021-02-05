import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teammates',
  templateUrl: './teammates.component.html',
  styleUrls: ['./teammates.component.scss']
})
export class TeammatesComponent implements OnInit {

    
  teamMembers: Array<string> = [
    'Dominik',
    'Katarzyna',
    'Krzysztof',
    'Michał P',
    'Robert',
    'Michał O',
    'Norbert',
    'Monika',
    'Patryk'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
