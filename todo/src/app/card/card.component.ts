import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() todo;
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {    
  }

}
