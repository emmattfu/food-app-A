import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth
  ) { }

  login(email, password): Promise<any> {
    return this.afauth.auth.signInWithEmailAndPassword(email, password)
  }

  singup(email, password): Promise<any> {
    return this.afauth.auth.createUserWithEmailAndPassword(email, password)
  }

  resetPassword(email) {
    return this.afauth.auth.sendPasswordResetEmail(email)
  }

  logout() {
    this.afauth.auth.signOut();
  }
}
