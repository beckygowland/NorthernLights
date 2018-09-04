import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

 @Component({
   selector: 'signUp',
   templateUrl: './signUp.html',
  })
  export class SignUpComponent {
    csrf: string;
    name: string;
    email: string;
    phone: string;
    @ViewChild('signupForm') signupForm: NgForm;
    constructor(public router: Router){
    }

    registerNewCustomer() {
      console.log('Register new customer', this.signupForm);
      this.router.navigateByUrl('/contact/requestQuote');
    }
}