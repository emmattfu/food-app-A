import { Component, OnInit } from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog} from "@angular/material";
import {FavouritesModalComponent} from "../favourites-modal/favourites-modal.component";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteRecipes: any[];
  isDelete: boolean = false;

  constructor(
    private favouriteService: FavouritesService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog
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
    this.dialog.open(FavouritesModalComponent).afterClosed()

    // if (result.afterOpen()) {
    //   this.favouriteService.removeFromFavourites(id);
    // }

  }
}

