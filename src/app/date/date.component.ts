import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent{
  text:string = 'Hello World';
  
  text2:string = 'Hi World';

  showTexts(){
    console.log('text1 = ' + this.text);
    console.log('text2 = ' + this.text2);
  }
}