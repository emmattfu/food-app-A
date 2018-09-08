import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { map } from "rxjs/internal/operators";

interface SearchRequest {
  count: number;
  recipes: any[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = environment.apiUrlFood2Fork;
  private apiKey = environment.apiKeyFood2Fork;
  private proxy = environment.proxy;
  private searchHistory: AngularFirestoreCollection;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.searchHistory = this.afs.collection('search_history');
  }

  getSearchHistory() {
    return this.searchHistory.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const data = item.payload.doc.data();
        const id = item.payload.doc.id;

        return { id, ...data };
      }))
    )
  }

  saveSearchHistory(value) {
    this.getSearchHistory().subscribe(res => {
     if (res.every(element => element.name !== value)) {
        return this.searchHistory.add({name: value, date: Date.now()});
      }
    });
  }

  searchRecipe(value: string) {
    console.log(this.searchHistory);
    return this.http.get(`${this.proxy}${this.apiUrl}/search?key=${this.apiKey}&q=${value}`).pipe(
      map((res: SearchRequest): any[] => res.recipes)
    )
  }

}
