import { Component, EventEmitter, Output , OnInit } from '@angular/core';
import{ TasksService } from '../tasks.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[TasksService]

})
export class TableComponent implements OnInit {
  showntask;
  pageSize:number =10;
  orderRule:any;

  orderby(value: any) { }

  constructor(private taskservice: TasksService) { }

  ngOnInit() {
    this.taskservice.fetch_json();   //this.taskservice.showntask
    this.showntask = this.taskservice.showntask;
    // this.taskservice.getTasks();
  }

  getpagesize(event) {
    this.pageSize = event.target.value;
    console.log(this.pageSize); 
    this.showntask = this.showntask.slice(0,this.pageSize)
  }

}
