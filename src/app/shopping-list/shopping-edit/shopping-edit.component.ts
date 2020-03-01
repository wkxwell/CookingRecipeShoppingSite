import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from'../../shared/Ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput', {static : true}) nameInputRef: ElementRef;

  @ViewChild ('amountInput', {static : true}) amountInputRef: ElementRef

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingService.addIngredient(newIngredient);
  }

}
