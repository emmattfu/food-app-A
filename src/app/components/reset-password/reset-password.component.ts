import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from "../../services/auth.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ResetModalComponent} from "../reset-modal/reset-modal.component";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  onReset() {
    this.dialog.open(ResetModalComponent, {data: {name: 'Please check your email'}});
    this.auth.resetPassword(this.email.value).then(res => {

    })
  }

}
