import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
    `
    .blue{
      color: blue;
    }
    .red{
      color: red;
    }
    `
  ]
})
export class DatabindingComponent implements OnInit {

  //for String interpolation examples
  appName: string = "PhoneBook";
  isLoggedIn: boolean = false;
  developersExp: number = 14;
  skillsList: string[] = [
    'html', 'css', 'js', 'ng'
  ];

  //property binding examples
  featureName: string = "Data binding";

  constructor() {

  }

  ngOnInit() {
  }

  //custom methods go here
  getExp() {
    return this.developersExp;
  }

  //prop binding method
  isAuthenticated() {
    return false;
  }

  //event binding
  onBtnClick( evt ){
    console.log(evt);
    alert("clicked");
  }
}
