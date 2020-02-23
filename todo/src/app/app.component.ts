import { Component, OnInit } from '@angular/core';

import { Todos } from "./todos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'todo';

  todos = Todos;

  alert(str: string) {
    alert(str)
  }

  ngOnInit() {
  }
  
}
