import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]; 
  subscription: Subscription;

  constructor(private recipeSerivce: RecipeService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeSerivce.recipesChanged
        .subscribe(
          (recipes: Recipe []) => {
          this.recipes = recipes;
      }
    );
    this.recipes = this.recipeSerivce.getRecipes();
  }

  newRecipe(){
    this.route.navigate(['new'], {relativeTo: this.router})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
