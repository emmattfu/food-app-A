import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/internal/operators";
import { SearchHistory } from "../models/SearchHistory";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = environment.apiUrlFood2Fork;
  private apiKey = environment.apiKeyFood2Fork;
  private proxy = environment.proxy;

  constructor(
    private http: HttpClient
  ) { }

  getRecipe(id: string) {
    return this.http.get(`${this.proxy}${this.apiUrl}/get?key=${this.apiKey}&rId=${id}`);
  }
}
