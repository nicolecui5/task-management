import { Component, OnInit } from '@angular/core';
import{ TasksService } from './tasks.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TasksService]
})

export class AppComponent 
implements OnInit{
  constructor(private taskservice: TasksService){}
  ngOnInit() {
    this.taskservice.getTasks();

  }
  
  title = 'task-management';
}
