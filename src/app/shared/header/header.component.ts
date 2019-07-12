import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileName: string;
  constructor( private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.latestUserProfile.subscribe(value => {
      console.log(value);
      this.profileName = value;
    });
  }

}
