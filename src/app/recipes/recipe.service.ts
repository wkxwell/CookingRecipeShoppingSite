import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new Subject<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('Egg Cheese', 
        'Double Baked Sunny Setup', 
        'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2015%2F08%2Ff2a7f8163565463900e5ed6e68e4630151371611.jpeg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Stupid Cheese', 
        'Double Baked Sunny Setup', 
        'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2015%2F08%2Ff2a7f8163565463900e5ed6e68e4630151371611.jpeg',
        [
            new Ingredient('Veg', 1),
            new Ingredient('Fries', 20)
        ]),
      ];

    constructor(private shoppingService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngreToShopping(ingredients: Ingredient[]){
        this.shoppingService.addAllIngre(ingredients);
    }


    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}