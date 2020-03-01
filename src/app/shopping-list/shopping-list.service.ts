import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient [] =[
        new Ingredient ('Apple', 2),
        new Ingredient ('Tomatoes', 5)
      ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onIngredientRemove(id: number){
    this.ingredients.slice(id, 1);
  }

  addAllIngre(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
}