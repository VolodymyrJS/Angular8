import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Name for 1-st recipe',
               'First recipe',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg'
    ),
    new Recipe('Name for 2-nd recipe',
               'Second recipe',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg'
)
  ];
  constructor() { }

  ngOnInit() {
  }

  wasSelecet(recipe: Recipe) {
    this.onWasSelected.emit(recipe);
  }
}
