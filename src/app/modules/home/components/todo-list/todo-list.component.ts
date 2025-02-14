import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  standalone: false,

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: 'Task 1', checked: true },
    { task: 'Task 2', checked: false },
    { task: 'Task 3', checked: true },
  ];

}
