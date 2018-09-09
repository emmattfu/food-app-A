export interface Recipe {
  recipe: RecipeInfo
}

interface RecipeInfo {
  f2f_url: string;
  image_url: string;
  ingredients: string[];
  publisher: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
}
