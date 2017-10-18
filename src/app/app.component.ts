import { Component, Input, EventEmitter } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    globalId = 1;
    @Input() newTaskText = '';
    
    todoList: Item[] = [
        {id: this.globalId, text: 'teste1', currentStatus: 'Todo'},
        {id: this.globalId, text: 'teste2', currentStatus: 'Done'},
        {id: this.globalId, text: 'teste3', currentStatus: 'Done'},
        {id: this.globalId, text: 'teste4', currentStatus: 'Doing'}
    ];

    newTask() {
        if (this.newTaskText.trim() !== '') {
            this.todoList.push({id: this.globalId, text: this.newTaskText, currentStatus: 'Todo'});
            this.globalId++;
        }
        this.newTaskText = '';
    }
}
