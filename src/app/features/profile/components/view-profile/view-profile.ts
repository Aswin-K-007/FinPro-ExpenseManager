import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileService, UserProfile } from '@features/profile/services/profile';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-profile.html',
  styleUrls: ['../../styles/profile-styles.scss']
})
export class ViewProfile implements OnInit {
  user!: UserProfile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      this.user = profile;
    });
  }
}
