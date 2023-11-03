import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordMask'
})
export class PasswordMaskPipe implements PipeTransform {
  transform(password: string): string {
    if (password.length <= 3) {
      return password; // Don't mask if the password is 3 characters or shorter
    }
    
    const maskedPart = '*'.repeat(password.length - 3);
    const lastPart = password.slice(-3);
    
    return maskedPart + lastPart;
  }
}
