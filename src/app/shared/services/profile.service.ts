import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //Step 1: Create BehaviourSubject with default value for subscribing first
  private userProfile = new BehaviorSubject<string>("Arun");

  //Step 2: Create Observable for the BehaviourSubject.. 
  //so anyone can subscibe to it.// latestUserProfile is subscribabale
  latestUserProfile = this.userProfile.asObservable(); 

  constructor() {

  }

  updateProfileName(newName: string){
    this.userProfile.next(newName);
  }
}
