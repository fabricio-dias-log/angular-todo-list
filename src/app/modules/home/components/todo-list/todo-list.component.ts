import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  standalone: false,

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];

  ngDoCheck(): void {
    this.taskList.sort((first, last)=>Number(first.checked) - Number(last.checked));
  }

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

  public validationInput(event:string, index: number): void {
    if(!event.length){
      const confirm = window.confirm("Task value is empty, do you want to delete it?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }
}
