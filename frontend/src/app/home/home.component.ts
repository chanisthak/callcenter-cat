import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() userData: any;

  constructor(private userService: UserService) {
    this.userData = this.userService.getUser();
  }
}
