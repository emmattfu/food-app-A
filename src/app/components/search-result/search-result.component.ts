import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";
import { DishPreview } from "../../models/DishPreview";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnChanges {
  @Input('result') searchResult;
  // Pagination
  showRecipe = [];
  recipePerPage = 10;
  currentPage = 1;
  pages = 0;

  constructor(
    private favourites: FavouritesService,
    private toastr: ToastrService
  ) { }

  ngOnChanges() {
    this.pages = Math.ceil(this.searchResult.length / this.recipePerPage);
    this.showPage();

    this.favourites.favouriteEvent.subscribe(res => console.log(res))
  }

  showPage(page: number = 1) {
    this.currentPage = page;
    const start = (page - 1) * this.recipePerPage;
    const end = page * this.recipePerPage;
    this.showRecipe = this.searchResult.slice(start, end);
  }

  addToFavourites(recipe: DishPreview) {
    this.favourites.saveFavourites(recipe).then(data => this.toastr.success('Рецепт добавлен в избранное', 'Успех'));

  }
}
