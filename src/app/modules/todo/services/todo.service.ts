import { Injectable } from '@angular/core';
import { TodoItemInterface } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItemsArray: Array<TodoItemInterface> = [
    {
      id: 0,
      description: 'Todo1',
      date: new Date(),
      isDone: false
    },  
    {
      id: 1,
      description: 'Todo2',
      date: new Date(),
      isDone: true
    },  
    {
      id: 2,
      description: 'Todo3',
      date: new Date(),
      isDone: true
    },  
    {
      id: 3,
      description: 'Todo4',
      date: new Date(),
      isDone: false
    }
  ];

  constructor() { }

  deleteItem(indexElementu: number) {
    // this.todoItemsArray.splice('indeks od któego usuwamy', 'ilość elementów do usunięcia');
    this.todoItemsArray.splice(indexElementu,1);
  }

}
