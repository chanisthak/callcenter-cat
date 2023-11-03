import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  ngOnInit() {
    feather.replace(); // ตรวจสอบ Feather Icons
  }
  isHidden = true;

  toggleProfileMenu() {
    this.isHidden = !this.isHidden;
  }
}
