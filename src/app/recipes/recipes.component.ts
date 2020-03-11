import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  firstSub: Subscription;
  constructor() { }

  ngOnInit() {

    const observer = Observable.create(observe => {
      let count = 0;
      setInterval(() => {
        observe.next(count);
        count++;
        if(count == 2){
          observe.error(new Error("number 2 detected"));
        }
      }, 1000)
    });

    this.firstSub = observer.pipe(filter(data => {
      return data > 0;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }


}
