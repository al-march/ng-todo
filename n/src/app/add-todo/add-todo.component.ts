import { Component, OnInit } from '@angular/core';
import { todos } from "../todos";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {
  todos = todos;
  constructor() { }

  ngOnInit(): void {
  }
  addNewTodo(event, formTodo) {
    event.preventDefault();
    const {title, description} = formTodo;
    todos.push({
      title: title.value,
      done: false,
      description: description.value
    });
    title.value = '';
    description.value = ''
  }
}
