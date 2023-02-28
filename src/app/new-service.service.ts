import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewServiceService {
  number: number = 12;
  word: string = 'Hell';
  consoleText(arg : any) {
    console.log(arg);
    console.log(this.number);
    console.log(this.word);
  }
  constructor() { }
}
