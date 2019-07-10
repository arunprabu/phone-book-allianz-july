import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //html 
  styleUrls: ['./app.component.css'] // css
})
export class AppComponent {
  //ts 
  title = 'phone-book';
}
