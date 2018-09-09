import { Component, OnInit } from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";
import {DishPreview} from "../../models/DishPreview";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteRecipes: any[];

  constructor(
    private favouriteService: FavouritesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.favouriteService.getFavourites().subscribe((res) => {
      this.favouriteRecipes = res;
      this.spinner.hide();
    }, err => {
      console.log(err);
      this.spinner.hide();
    })
  }

  onDelete(id:string) {
    this.favouriteService.removeFromFavourites(id);
  }
}
