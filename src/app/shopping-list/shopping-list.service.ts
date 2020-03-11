import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs'

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditting = new Subject<number>();

   private ingredients: Ingredient [] =[
        new Ingredient ('Apple', 2),
        new Ingredient ('Tomatoes', 5)
      ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  onIngredientRemove(id: number){
    this.ingredients.slice(id, 1);
  }

  addAllIngre(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}