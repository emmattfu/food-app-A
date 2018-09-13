import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list.service";
import { ShoppingList, Ingredient } from "../../models/ShoppingList";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList = [];
  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe((res: ShoppingList[]) => {
      this.shoppingList = res;
    })
  }


  deleteItem(item: string, i: number) {
    this.shoppingListService.deleteIngredient(item, i)
  }
}
