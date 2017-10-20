import { Component, Input, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Item } from './item';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    globalId = 1;
    filter: String;
    @Input() newTaskText = '';
    @Input() taskTitle = '';
    statusList = ['Todo', 'Doing', 'Pending', 'Done'];
    todoList = [];

    constructor(public dialog: MatDialog) {

    }

    editTask(task): void {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            width: '200px',
            height: '200px',
            data: task
        });
    }

    newTask(): void {
        if (this.newTaskText.trim() !== '' && this.taskTitle.trim() !== '') {
            this.todoList.push({id: this.globalId, text: this.newTaskText, currentStatus: 'Todo', title: this.taskTitle});
            this.globalId++;
        }
        this.newTaskText = '';
        this.taskTitle = '';
    }
}
