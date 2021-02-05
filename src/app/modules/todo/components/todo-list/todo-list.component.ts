import { Component, OnInit } from '@angular/core';
import { TodoItemInterface } from '../../interfaces/todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  todoItems: Array<TodoItemInterface> = [];

  
  // todoItems: Array<TodoItemInterface> = [
  //   {
  //     id: 0,
  //     description: 'Todo1',
  //     date: new Date(),
  //     isDone: false
  //   },  
  //   {
  //     id: 1,
  //     description: 'Todo2',
  //     date: new Date(),
  //     isDone: false
  //   }
  // ];

  constructor(private todoService: TodoService) {
    this.todoItems = this.todoService.todoItemsArray;
   }

  ngOnInit(): void {
  }

  onDeleteTodo(index: number) {
    console.log(index);
    this.todoService.deleteItem(index);
    
    // console.log('został wywołany event na dziecku')
  }


}
