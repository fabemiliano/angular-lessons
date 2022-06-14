import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [
        animate(2000)
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {
  todo: string = ""
  todoList: string[] = []
  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todoList.push(this.todo)
    this.todo = ""
  }

}
