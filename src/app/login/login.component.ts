import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit(form: any) {
    // Access the form values using the form object.
    const username = form.value.username;
    const password = form.value.password;

    // Display an alert with the entered username and password.
    if (form.valid) {
      // Your form is valid, you can perform any additional logic here.
      // For now, simply navigate to the "Home" component.
      this.router.navigate(['/home']);
    }
  }
}
