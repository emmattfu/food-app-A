import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from "angularfire2";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// Enviroment
import { environment } from "../environments/environment";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
