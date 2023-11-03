import { Directive, Input, HostBinding } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appFormValidateMsg]'
})
export class FormValidateMsgDirective {
  @Input() control: AbstractControl | null = null

  constructor() {}

  @HostBinding('textContent')
  get errorMessage(): string {
    if (this.control && this.control.invalid && this.control.touched) {
      const errors = this.control.errors;
      if (errors) {
        if (errors?.['required']) {
          return 'This field is required.';
        } else if (errors?.['minlength']) {
          return `Min length is ${errors['minlength'].requiredLength}`;
        } else if (errors?.['maxlength']) {
          return `Max length is ${errors['maxlength'].requiredLength}`;
        } else if (errors?.['pattern']) {
          return 'Invalid pattern';
        }
      }
    }
    return '';
  }
}
