import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  @Input() myExp: number = 14; //@Input() makes the variable as custom property

  constructor() { }

  ngOnInit() {
  }

}
