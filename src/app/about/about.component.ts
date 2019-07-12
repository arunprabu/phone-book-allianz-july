import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit, OnDestroy {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  placeHolderText: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam debitis cumque quod cum accusantium minus, illo dolorem quae, mollitia illum maxime soluta eos provident nostrum facere rem sed. Consequuntur!";
  profileName: string;
  newName:string;
  profileSubscription = new Subscription();

  //Step3: connect the service with the comp
  constructor( private profileService: ProfileService) { }

  ngOnInit() {
    this.profileSubscription = this.profileService.latestUserProfile.subscribe(value => {
      console.log(value);
      this.profileName = value;
    });
  }
  
  updateNameHandler(){
    this.profileService.updateProfileName(this.newName);
  }

  ngOnDestroy(){
    console.log("going away from about page")
    this.profileSubscription.unsubscribe();
  }


}
