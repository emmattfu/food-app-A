import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { map } from "rxjs/internal/operators";
import {DishPreview} from "../models/DishPreview";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favouriteRecipes: AngularFirestoreCollection;
  private _favourite = new BehaviorSubject<any[]>([]);
  public favouritesEvent = this._favourite.asObservable();

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.favouriteRecipes = this.afs.collection<DishPreview[]>('favourites')
  }

  getFavourites() {
    return this.favouriteRecipes.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const data = item.payload.doc.data();
        const id = item.payload.doc.id;

        return { id, ...data };
      }))
    )
  }

  saveFavourites(recipe: DishPreview): Promise<any> {
    return this.favouriteRecipes.add(recipe)
  }

  removeFromFavourites(id:string): void {
    this.favouriteRecipes.doc(id).delete();
  }

  emitFavouriteEvent(recipe: DishPreview[]) {
    this._favourite.next(recipe);
  }
}
