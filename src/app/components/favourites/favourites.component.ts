import { Component, OnInit } from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from "@angular/material";
import { FavouritesModalComponent } from "../favourites-modal/favourites-modal.component";
import { DishPreview } from "../../models/DishPreview";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteRecipes: any[];

  constructor(
    private favouriteService: FavouritesService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.favouriteService.getFavourites().subscribe((res: DishPreview[]) => {
      console.log(res);
      this.favouriteRecipes = res;
      this.spinner.hide();
    }, err => {
      console.log(err);
      this.spinner.hide();
    });

  }

  onDelete(id:string) {
    this.dialog.open(FavouritesModalComponent).afterClosed().subscribe((res: boolean) => {
      if (res) this.favouriteService.removeFromFavourites(id);
    })
  }
}

