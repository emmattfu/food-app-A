import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { map } from "rxjs/internal/operators";
import {DishPreview} from "../models/DishPreview";
import {id} from "@firebase/storage/dist/src/implementation/backoff";

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private apiUrl = environment.apiUrlFood2Fork;
  private apiKey = environment.apiKeyFood2Fork;
  private proxy = environment.proxy;
  private favouriteRecipes: AngularFirestoreCollection;
  itemDoc: AngularFirestoreDocument<DishPreview>;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.favouriteRecipes = this.afs.collection('favourites')
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

  saveFavourites(recipe) {
    return this.favouriteRecipes.add(recipe);
  }

  removeFromFavourites(id:string) {
    this.favouriteRecipes.doc(id).delete();
  }
}
