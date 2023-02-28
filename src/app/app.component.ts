import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My test app';
  constructor(svc: NewServiceService){
    svc.consoleText("Hello Service");
    this.title = svc.word + svc.number.toString();
    console.log(this.title);
  }
}
