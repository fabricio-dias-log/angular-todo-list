import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  standalone: false,

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [];

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Are you sure you want to delete all tasks?");

    if (!confirm) {
      return;
    }
    
    this.taskList = []; 
  }

  public setEmitItemTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }
}
