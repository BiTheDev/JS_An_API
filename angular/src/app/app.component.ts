import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Title = 'Angular';
  tasks ={};
  detail = {};
  unclick: boolean = false;
  getdetail:boolean = false;
  newTask : any;
  editTask :any;
  edit:boolean = false;

  constructor(private _httpService: HttpService){
    this.tasks;
    this.unclick;
    this.getdetail;
  }
  ngOnInit() {
    this.newTask = { title: "", description: "" }
    this.editTask = { title: "", description: ""} 
  }
  ClickToGetAllTask(){
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      console.log("Got all Data",data);
      this.tasks = data;
      console.log(this.tasks);
      this.unclick = true;
      this.getdetail = false;
    });
  }
  ClickTogetInfo(id){
    let observable = this._httpService.getInfo(id);
    this.getdetail = true;
    observable.subscribe(data => {console.log("Get one data",data); 
    this.detail = data;
    console.log(this.detail);
      }
    )
  }
  CreateTask(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => console.log("data created",data));
    this.newTask = { title: "", description: "" };
    this.ClickToGetAllTask();
  }
  UpdateTask(id){
    let observable = this._httpService.editTask(id,this.editTask);
    observable.subscribe(data => console.log("data updated",data));
    this.editTask = { title: "", description: ""} 
    this.ClickToGetAllTask();

  }
  EditTask(id){
    this.edit =! this.edit;
    let observable = this._httpService.getInfo(id);
    observable.subscribe(data => {
      console.log("Edit Task",data)
      this.editTask = {title : data[0].title, description : data[0].description};
      console.log(this.editTask);
      
    });
  }
  RemoveTask(id){
    let observable = this._httpService.removeTask(id);
    observable.subscribe(data => console.log("data deleted",data));
    this.ClickToGetAllTask();
  }

}
