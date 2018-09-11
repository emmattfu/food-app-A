export interface ShoppingList {
  id: string;
  title: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
}
