import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit{
  message1: string = 'World';
  message2: string;
  constructor(){
    this.message2 = new Date().toLocaleTimeString();
    setInterval(()=>{
      this.message2 = new Date().toLocaleTimeString();
    },1000);
  }

  ngOnInit(){
    
  }
}