import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Task } from './tasks.model';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }
  tasks: Task[]=[]
  showntask: any

  fetch_json(){
    if (localStorage.getItem('taskObj')) {
      this.showntask= JSON.parse(localStorage.getItem('taskObj'))
    } else {
      this._http.get('../assets/sample.json').subscribe(data=>{
        this.showntask = data; //????
        localStorage.setItem('taskObj', JSON.stringify(this.showntask));
      })
    }

  }
  
  getTasks(){
    this.showntask= JSON.parse(localStorage.getItem('sample.json'));
  }
  getTask(index:number){return this.showntask[index]

  }
  addtask(task:Task){
    this.fetch_json();
    this.showntask.push(task)
    localStorage.setItem('taskObj', JSON.stringify(this.tasks));

  }
  updateTask(index:number,newTask:Task){
    this.showntask[index]=newTask;
    this.showntask.splice(index,1);
  }
}


