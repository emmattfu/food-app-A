import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnChanges {
  @Input('result') searchResult;
  constructor(
    private favourites: FavouritesService
  ) { }

  ngOnChanges() {
    console.log(this.searchResult);
  }

  addToFavourites(recipe) {
    this.favourites.saveFavourites(recipe);
  }
}
