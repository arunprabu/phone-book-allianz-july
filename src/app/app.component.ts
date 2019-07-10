import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //html 
  styleUrls: ['./app.component.css'] // css
})
export class AppComponent {
  //ts 
  title = 'Phone Book App v 1.0.1';
}
