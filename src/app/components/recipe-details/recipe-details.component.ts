import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../models/Recipe";
import { Observable } from "rxjs/internal/Observable";
import { ShoppingListService } from "../../services/shopping-list.service";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DishPreview } from "../../models/DishPreview";
import { FavouritesService } from "../../services/favourites.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  favourite;
  isFavourite: boolean;
  selectedOptions: string;
  ingredientstoBuy = [];
  id: string;
  recipe;
  ingredientsList: Observable<string[]>;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private ShoppingListService: ShoppingListService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private favourites: FavouritesService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipe(this.id).subscribe(({recipe: r}:Recipe) => {
      this.recipe = r;
      this.ingredientsList = new Observable(observer => {
        observer.next(this.recipe.ingredients);
        this.spinner.hide();
      });
    }, err => {
      this.toastr.error(err);
      this.spinner.hide();
    });
  }

  addItemToShoppingList(ingredient) {
    let ingredientString = ingredient.join('');
    this.ingredientstoBuy.push(ingredientString);
  }

  addToShoppingList(title:string) {
    this.ShoppingListService.addToSHoppingList(title, this.ingredientstoBuy);
  }

  addToFavourites(recipe: DishPreview) {
    this.favourites.saveFavourites(recipe).then(data => {
      this.toastr.success('Рецепт добавлен в избранное', 'Успех')
    }).catch((err) => {
      this.toastr.error(err)
    });
  }
}
