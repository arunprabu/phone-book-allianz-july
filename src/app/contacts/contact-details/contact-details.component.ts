import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../contact.service';
import { IContact } from '../icontact';

declare var $:any;  //using jquery in a component 

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: IContact;
  duplicateContactData: IContact;
  isSaved: boolean;

  constructor( private contactService: ContactService, 
              private activatedRoute: ActivatedRoute) { 
    console.log("inside constructor");
  }

  ngOnInit() {
    //read url parameter in angular 
    let _contactId = this.activatedRoute.snapshot.paramMap.get('id');

    console.log("inside ngOnInit");
    //send req to service
    this.contactService.getContactById(_contactId)
      .subscribe( (res: IContact) => {
        console.log(res);
        //Todo: store in var and display it in html
        this.contactData = res;
      });
  }

  openEditModal(){
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
    $('#editContactModal').modal('show');
  }

  updateBtnHandler(){
    console.log(this.duplicateContactData);
    //connect to service
    this.contactService.updataContact(this.duplicateContactData) //send the data to service
      .subscribe((res: IContact) => { //get the resp from service
        console.log(res); 
        if(res){
          this.isSaved = true;
          this.contactData = res;
          setTimeout( () => {
            $('#editContactModal').modal('hide');
          }, 3000);
        }
      });
    
    
  }

}
