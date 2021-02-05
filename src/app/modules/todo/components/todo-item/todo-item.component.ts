import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoItemInterface } from '../../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() dataFromList: TodoItemInterface;
  @Output() deleteItem = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(cokolwiek: Event) {
    // alert('działa!');
    // console.log(cokolwiek);
    this.deleteItem.emit(cokolwiek);
  }

}
