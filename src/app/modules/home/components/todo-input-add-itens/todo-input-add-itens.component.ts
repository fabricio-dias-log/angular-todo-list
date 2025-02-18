import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  standalone: false,
  
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.css'
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList(): void {
    this.addItemTaskList = this.addItemTaskList.trim();
    
    if (!this.addItemTaskList) {
      return;
    }

    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";
  }
}
