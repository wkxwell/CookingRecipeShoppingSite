import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;
  constructor(private reciepeService: RecipeService, private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
         this.recipe = this.reciepeService.getRecipe(this.id);
        }
      )
  }

  onAddToShoppingList(){
    this.reciepeService.addIngreToShopping(this.recipe.ingredients);
  }

  onRecipeEdit(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe(){
    this.reciepeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
