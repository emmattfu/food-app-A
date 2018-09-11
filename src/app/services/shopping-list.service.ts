import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { map } from "rxjs/internal/operators";
import { ShoppingList, Ingredient} from "../models/ShoppingList";

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

  addToSHoppingList(item: ShoppingList) {
   return this.shoppingListCollection.add(item);
  }

  deleteIngredient(id: string, i: number){
    let doc = this.shoppingListCollection.doc(id)

  }
}