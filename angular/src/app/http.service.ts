import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTask();
  }
  getTask(){
    let allTask = this._http.get("/tasks");
    allTask.subscribe(data => console.log("Got all Tasks",data))
    
  }
  getOneTask(){
    let oneTask = this._http.get("/tasks/5b95c0362ad14a14db0f5a9f");
    oneTask.subscribe(data => console.log("Got one Tasks",data))
  }
}

