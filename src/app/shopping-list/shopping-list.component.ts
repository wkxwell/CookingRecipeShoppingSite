import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient} from '../shared/Ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient [];

  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredients();
   this.igChangeSub = this.shoppingListService.ingredientsChanged
    .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void{
    this.igChangeSub.unsubscribe();
  }
  
  onEditItem(index: number){
    this.shoppingListService.startedEditting.next(index);
  }
}
