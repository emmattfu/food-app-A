import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth,
    private http: HttpClient
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
}
