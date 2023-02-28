import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent{

  visibility: boolean = false;
  colorRed: boolean = true;

  toggleVisible(){
    this.visibility = !this.visibility;
  }

  toggleColor(){
    this.colorRed = !this.colorRed;
  }
}