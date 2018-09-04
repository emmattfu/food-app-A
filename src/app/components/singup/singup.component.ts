import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  emailForm = new FormControl('', [Validators.required, Validators.email]);
  passwordForm = new FormControl('', Validators.required);

  onSingUp() {
    this.auth.singup(this.emailForm.value, this.passwordForm.value)
      .then( res => {
        console.log(res);
        this.router.navigate(['/'])
      })
      .catch(err => {
        console.log(err)
    })
  }

  matcher = new MyErrorStateMatcher();
}
