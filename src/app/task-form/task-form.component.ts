import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['../app.component.css', './task-form.component.css']
})
export class TaskFormComponent {
  submitTask(input: string): void {
    console.log("Task " + input);
  }
}
