import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService, UserProfile } from '@features/profile/services/profile';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.html',
  styleUrls: ['../../styles/profile-styles.scss']
})
export class EditProfile implements OnInit {
  user: UserProfile = {
    id: 0,
    name: '',
    username: '',
    email: '',
    mobile: '',
    address: '',
    joinedDate: ''
  };

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    // Load current profile details
    this.profileService.getProfile().subscribe(profile => {
      this.user = { ...profile };
    });
  }

  onSave(): void {
    this.profileService.updateProfile(this.user).subscribe(() => {
      alert('Profile updated successfully!');
      this.router.navigate(['/profile/view']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/profile/view']);
  }
}
