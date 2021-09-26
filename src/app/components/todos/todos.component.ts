import { Todo } from '../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Fist todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }
  togleDone(id: number): void {
    if (this.todos) {
      this.todos.map((todo, index) => {
        if (index == id) todo.completed = !todo.completed;
        return todo;
      });
    }
  }
  deleteTodo(id: number): void {
    if (this.todos) {
      this.todos = this.todos.filter((todo, index) => index !== id);
    }
  }
  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
