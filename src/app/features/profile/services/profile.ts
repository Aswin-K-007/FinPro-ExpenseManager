import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  mobile: string;
  address: string;
  joinedDate: string;
  avgexp:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileData: UserProfile = {
    id: 1,
    name: 'John Doe',
    username: 'john_doe',
    email: 'john@example.com',
    mobile: '9876543210',
    address: 'Flat No. 123, Main Street, Mumbai',
    joinedDate: '2024-03-15',
    avgexp:1500
  };

  constructor() {}

  getProfile(): Observable<UserProfile> {
    return of(this.profileData);
  }

  updateProfile(updatedProfile: UserProfile): Observable<boolean> {
    this.profileData = { ...this.profileData, ...updatedProfile };
    console.log('Profile updated:', this.profileData);
    return of(true);
  }

  clearProfile(): void {
    this.profileData = {
      id: this.profileData.id,
      name: '',
      username: '',
      email: '',
      mobile: '',
      address: '',
      joinedDate: '',
      avgexp:0
    };
  }
}
