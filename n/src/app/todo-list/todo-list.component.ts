import { Component, OnInit } from '@angular/core';
import {todos} from "../todos";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos = todos;
  ngOnInit(): void {
  }

}
