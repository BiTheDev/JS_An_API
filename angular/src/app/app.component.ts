import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'Angular';
  tasks ={};
  detail = {};
  unclick: boolean = false;
  getdetail:boolean = false;

  constructor(private _httpService: HttpService){
    this.tasks;
    this.unclick;
    this.getdetail;
  }
  ClickToGetAllTask(){
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      console.log("Got all Data",data);
      this.tasks = data;
      console.log(this.tasks);
      this.unclick =! this.unclick;
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

}
