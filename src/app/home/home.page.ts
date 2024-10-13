import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: any = {

  }
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        title: 'Install NodeJS',
        isDone: false
      },
      {
        title: 'Install Ionic CLI',
        isDone: false
      },
      {
        title: 'Start a new Ionic project',
        isDone: false
      }
    ];
  }

  addTodo($event: any) {
    console.log('Add todo');
    this.todos.push({
      title: 'New todo',
      isDone: false
    });
  }

  onInputTyped($event: any, todo: any) {
    console.log($event);
    todo.title = $event.detail.value;
  }

  onTodoChecked($event: any, todo: any) {
    todo.isDone = !todo.isDone;
    console.log(todo.isDone)
  }
}
