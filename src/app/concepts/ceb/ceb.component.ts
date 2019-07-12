import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //step1: create custom event 
  @Output() myProfileLoaded = new EventEmitter();

  constructor() {
    console.log("Inside Constructor");
  }

  ngOnInit() {
    
  }

  btnClickHandler(){
    console.log("Inside ngOnInit");
    //Step2: Emit the event
    this.myProfileLoaded.emit("arun");
  }
  
}
