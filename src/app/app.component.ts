import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'butt-fart',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  currentFocus: string = 'to-dos';
  currentTime = new Date;
  month: number = this.currentTime.getMonth() + 1;
  date: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}
