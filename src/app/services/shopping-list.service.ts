import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { map } from "rxjs/internal/operators";
import {Ingredient, ShoppingList} from "../models/ShoppingList";


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingListCollection: AngularFirestoreCollection;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
) {
    this.shoppingListCollection = this.afs.collection<ShoppingList[]>('shopping_list');
  }

  getShoppingList() {
    return this.shoppingListCollection.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const data = item.payload.doc.data();
        const id = item.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  addToSHoppingList(title: string, ingredients: string[]) {
    let ingredientsArr = ingredients.map((ingredient: string) => {
      return {name: ingredient}
    });
    let item = {
      title: title,
      ingredients: ingredientsArr
    };
   return this.shoppingListCollection.add(item);
  }

  deleteIngredient(ingredientsList: Ingredient[], id: string) {
    if (!ingredientsList.length) {
      this.shoppingListCollection.doc(id).delete();
    } else {
      this.shoppingListCollection.doc(id).update({
        ingredients: ingredientsList
      })
    }
  }
}
