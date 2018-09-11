import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor(private _httpService: HttpService){
  }
  GetAllTasks(){
      return this._httpService.getTask();
  }
  getOneTask(){
    return this._httpService.getOneTask();
  }
}
