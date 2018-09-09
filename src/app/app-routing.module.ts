import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SingupComponent } from "./components/singup/singup.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { FavouritesComponent } from "./components/favourites/favourites.component";
import { SettingsComponent } from './components/settings/settings.component';
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
