import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from "angularfire2";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule  } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { NgxSpinnerModule } from 'ngx-spinner';


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SingupComponent } from './components/singup/singup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetModalComponent } from './components/reset-modal/reset-modal.component';

// Enviroment
import { environment } from "../environments/environment";

//Services
import { AuthService } from "./services/auth.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    ResetPasswordComponent,
    ResetModalComponent,
    NavbarComponent,
    SearchComponent,
    SearchResultComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.config),
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    AngularFirestoreModule,
    NgxSpinnerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ResetModalComponent]
})
export class AppModule { }
