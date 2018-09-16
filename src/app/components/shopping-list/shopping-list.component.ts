import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list.service";
import {Ingredient, ShoppingList} from "../../models/ShoppingList";
import { FavouritesModalComponent } from "../favourites-modal/favourites-modal.component";
import { MatDialog } from "@angular/material";
import { NgxSpinnerService } from 'ngx-spinner'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList = [];
  constructor(
    private shoppingListService: ShoppingListService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.shoppingListService.getShoppingList().subscribe((res: ShoppingList[]) => {
      this.shoppingList = res;
      this.spinner.hide()
    }, err => {
      this.toastr.error(err);
      this.spinner.hide()
    })
  }

  deleteItem(item: ShoppingList, ingredientName: string, id: string) {
    this.dialog.open(FavouritesModalComponent).afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.spinner.show();
        let newArr = item.ingredients.filter((ingredient: Ingredient) => ingredient.name !== ingredientName);
        this.shoppingListService.deleteIngredient(newArr, id);
        this.spinner.hide()
      }
    })
  }
}
