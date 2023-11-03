import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: any;

  setUser(user: any) {
    this.userData = user;
  }

  getUser() {
    return this.userData;
  }
}
