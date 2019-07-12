import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  dataReceivedFromChild: string;

  isAuthenticated: boolean = false;

  skillsList: string[] = [
    'Angular', 'react', 'nodejs', 'html'
  ]

  constructor() { }

  ngOnInit() {
  }

  getMyExp( exp ){
    return exp;
  }

  myProfileLoadedHandler( data ){
    console.log(data);
    this.dataReceivedFromChild = data;
  }
}
