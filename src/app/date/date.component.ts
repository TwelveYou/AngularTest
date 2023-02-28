import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent{
  myEvent(event : any){
    console.log(event);
    console.log('Привет');
  }

  isCollapsed : boolean = true;
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
}