import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.css']
})
export class BacklogItemComponent implements OnInit {

    taskList: Item[];
    @Input() text: string;
    @Input() statusFilter: string;

    @Output() taskListChange = new EventEmitter();

    @Input()
    get tasks() {
        return this.taskList;
    }

    set tasks(t) {
        this.taskList = t;
        this.taskListChange.emit(this.taskList);
    }

    @Input() currentSelected: string;
    taskStatus = ['Todo', 'Doing', 'Pending', 'Done'];

    itemSelected(item, status) {
        this.currentSelected = status;
        this.taskList = this.taskList.filter(item => item.currentStatus === this.statusFilter);
    }

    constructor() { }

    ngOnInit() {
        this.taskList = this.taskList.filter(item => item.currentStatus === this.statusFilter);
        console.log(this.taskList);
    }

}
