import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IContact } from './icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  apiUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor( private http: HttpClient) { }

  create( contactData: any){ //1.receive data from component 
    console.log(contactData);
    //2.send the same to rest api 
      //2.1. identify the api url 
       //https://jsonplaceholder.typicode.com/users
      //2.2. identify the http methods 
        //POST 
      //2.3 send the data
    return this.http.post(this.apiUrl, contactData)
          .pipe( map( resp => { //3.receive the resp from rest api 
            console.log(resp);
            return resp; //4.send it back to component 
          }));

  }

  getContacts(){
    return this.http.get(this.apiUrl)
      .pipe(map( (resp: IContact[]) => {
        console.log(resp);
        return resp;
      }));
  }

  getContactById(id: string){
    console.log(id);
    let _contactApiUrl = this.apiUrl+"/"+id;

    return this.http.get(_contactApiUrl)
      .pipe(map( (res: IContact) => {
        console.log(res);
        return res;
      }));
  }

  updataContact( updatableContact: any){
    console.log(updatableContact);

    let _contactApiUrl = this.apiUrl+"/"+updatableContact.id;

    return this.http.put(_contactApiUrl, updatableContact)
      .pipe(map( res => {
        console.log(res);
        return res;
      }));
  }
}
