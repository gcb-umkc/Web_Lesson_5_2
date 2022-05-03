import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  inputTodo = '';

// Write code to push new item
  submitNewItem() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
  }

  // Write code to complete item
  completeItem(index: number): void {

  }

  // Write code to delete item
  deleteItem(index: number) {
    this.todos.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ];
  }


}
