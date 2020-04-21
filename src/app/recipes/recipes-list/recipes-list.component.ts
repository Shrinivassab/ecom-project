import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipes } from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[]  = [
    new Recipes('A Test Recipe', 'A sample text description', 'https://files2.hungryforever.com/wp-content/uploads/2015/04/tamil.jpg'),
    new Recipes('A Another Test Recipe', 'A sample text description', 'https://thalappakatti.com/wp-content/uploads/2016/11/three-col-1-2048x0.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipes) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
