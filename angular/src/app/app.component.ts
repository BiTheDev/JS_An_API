import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Title = 'Angular';
  tasks =[];
  title :String;
  description : String = "";
  completed : Boolean = false;
  loggedIn: boolean;

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.GetTasksFromService()
    this.tasks;
  }
  GetTasksFromService(){
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      console.log("Got all Data",data);
      for(let x in data){
        this.tasks.push(data[x].title + " - " + data[x].description) ;
      }
      console.log(this.tasks);
      
    });
  }

}
