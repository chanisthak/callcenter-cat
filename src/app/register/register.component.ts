import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z \-\']+$'),
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z \-\']+$'),
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)
      ]],
      confirmPassword: ['', [
        Validators.required,
      ]],
      dateOfBirth: ['', [
        Validators.required,
      ]],
      age: [''],
      job: ['', [
      ]],
    }, { validators: this.matchPassword }); // Use the custom validator here
  }

  jobOptions = [
    { value: 'doctor', label: 'หมอ' },
    { value: 'nurse', label: 'พยาบาล' },
    { value: 'teacher', label: 'คุณครู' },
    { value: 'police', label: 'ตำรวจ' },
  ];

  ngOnInit() {
    this.userForm.get('dateOfBirth')?.valueChanges.subscribe((dateOfBirth) => {
      this.calculateAge(dateOfBirth);
    });
  }

  // Custom validator function to check if the password and confirmPassword fields match
  matchPassword(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  calculateAge(dateOfBirth: string) {
    if (dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      this.userForm.get('age')?.setValue(age);
    } else {
      this.userForm.get('age')?.setValue('');
    }
  }

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    age: 0,
    job: '',
  };

  onSubmit() {
    this.user = {
      firstName: this.userForm.get('firstName')?.value || '',
      lastName: this.userForm.get('lastName')?.value || '',
      email: this.userForm.get('email')?.value || '',
      password: this.userForm.get('password')?.value || '',
      confirmPassword: this.userForm.get('confirmPassword')?.value || '',
      dateOfBirth: this.userForm.get('dateOfBirth')?.value || '',
      age: this.userForm.get('age')?.value || '',
      job: this.userForm.get('confirmPassword')?.value || '',
      // Add other form values here
    };
    this.userService.setUser(this.user);
    this.router.navigate(['/home']);
  }
}
