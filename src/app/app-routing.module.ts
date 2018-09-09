import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SingupComponent } from "./components/singup/singup.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'favourites', component: FavouritesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
