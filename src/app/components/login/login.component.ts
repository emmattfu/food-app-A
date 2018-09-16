import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  matcher = new MyErrorStateMatcher();

  onLogin() {
    this.spinner.show();
    this.auth.login(this.email.value, this.password.value);
    this.spinner.hide();
  }

}
