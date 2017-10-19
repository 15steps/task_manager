import { Component, Input, EventEmitter } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    globalId = 1;
    filter: String;
    @Input() newTaskText = '';

    statusList = ['Todo', 'Pending', 'Doing', 'Done'];

    todoList = [];
    
    updateFilter(currentTab) {
        console.log('updating with filter ' + currentTab);
        this.filter = currentTab;   
    }

    newTask() {
        if (this.newTaskText.trim() !== '') {
            this.todoList.push({id: this.globalId, text: this.newTaskText, currentStatus: 'Todo'});
            this.globalId++;
        }
        this.newTaskText = '';
    }
}
