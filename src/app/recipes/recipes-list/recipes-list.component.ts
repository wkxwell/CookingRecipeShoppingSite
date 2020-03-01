import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]; 

  constructor(private recipeSerivce: RecipeService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeSerivce.getRecipes();
  }

  newRecipe(){
    this.route.navigate(['new'], {relativeTo: this.router})
  }
}
