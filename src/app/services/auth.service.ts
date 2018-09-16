import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userId:string;
  private userLogin: BehaviorSubject<string> = new BehaviorSubject<string>(this.isSignedIn);
  public userLoginEvent = this.userLogin.asObservable();

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  get isSignedIn() {
    return localStorage.getItem('id');
  }

  private set userId(id:string) {
    this._userId = id;
    localStorage.setItem('id', id )
  }

  login(email: string, password: string) {
    this.afauth.auth.signInWithEmailAndPassword(email, password).then(user => {
      this.userId = user.user.uid;
      this.router.navigate(['/']);
      return true
    }, err => {
      this.toastr.error(err)
    })
  }

  singup(email: string, password: string): Promise<any> {
    return this.afauth.auth.createUserWithEmailAndPassword(email, password)
  }

  resetPassword(email: string) {
    return this.afauth.auth.sendPasswordResetEmail(email)
  }

  logout() {
    localStorage.removeItem('id');
    this.afauth.auth.signOut();
  }

  emitLoginEvent(res):void {
    this.userLogin.next(res);
  }
}
