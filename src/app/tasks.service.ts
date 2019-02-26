import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Task} from './tasks.model';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }
  task: Task[]=[];
  fetch_json(){
    this._http.get('../../sample.json').subscribe(data=>{
      this.task = data as Task[];
      localStorage.setItem('taskObj', JSON.stringify(this.task));
    })
  }
  getTasks(){
    let data = JSON.parse(localStorage.getItem('sample.json'));

  }
}

