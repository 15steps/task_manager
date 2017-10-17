import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    globalId: number = 1;
    @Input() newTaskText: string = '';
    
    todoList: Item[] = [];
       
    itemSelected(item) {
        item.completed = !item.completed;
    }
    
    newTask() {
        if(this.newTaskText.trim() !== '') {
            this.todoList.push({id: this.globalId, text: this.newTaskText, completed: false});
            this.globalId++;
        }
        this.newTaskText = '';
    }
}

class Item {
    id: number;
    text: string;
    completed: boolean = false;
}