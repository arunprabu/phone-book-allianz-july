import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { IContact } from './icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: IContact[];

  constructor( private contactService: ContactService) { 
    console.log("Inside constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //send a req to service 
    this.contactService.getContacts()
      .subscribe( (res: IContact[]) => { //receive the resp from service
        console.log(res);
        this.contactList = res; //store it in variable for looping thru
      })
  }

}
