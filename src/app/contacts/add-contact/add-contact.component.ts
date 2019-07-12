import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  //Step 1: Create Form group
  contactForm: FormGroup;
  isSaved: boolean;
  
  //connect to service via dependency injection
  constructor( private contactService: ContactService ) {

  }

  ngOnInit() {
    //Step 2
    this.contactForm = new FormGroup({
       // we'll create new form controls 
       name: new FormControl('', Validators.required),
       phone: new FormControl('', Validators.required),
       email: new FormControl('', [
          Validators.required,
          Validators.email
       ])
    });
  }

  onAddContactHandler(){
    console.log(this.contactForm.value); //get the form data

    //1.send the data to service
    this.contactService.create(this.contactForm.value)
      .subscribe( res => { //2.receive the data from service
        console.log(res);
        if(res){
          this.isSaved = true;
        }
      });

     
  }

}
