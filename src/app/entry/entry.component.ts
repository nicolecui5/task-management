import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks.model';
import { FormsModule } from '@angular/forms';

// import{ TasksService } from '../tasks.service'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
    public QuoteType: string;
    public Quote: Number;
    public Contact: string;
    public Task: string;
    public DueDate: string;
    public TaskType: string;
  // constructor(private tasksService: TasksService) { }
  constructor(){}
  ngOnInit() {

    newtask:Task;

  }
  ngonsubmit(f){


  }

}
