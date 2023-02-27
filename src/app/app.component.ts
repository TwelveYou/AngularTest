import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root', // ниже – обязательно «`» (ОБРАТНЫЙ СЛЭШ)
  template: ` <h1> Hello World! </h1>
			<p> my first component <p> <div> {{title}} </div>
      <app-mynewcomponent></app-mynewcomponent>` , 
  styles: [`*{color: gray;} p{font-size: 5rem;}`] 
})


export class AppComponent {
  title = 'My test app';
}
