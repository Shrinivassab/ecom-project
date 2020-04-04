import { Component, OnInit } from '@angular/core';

import { Recipes } from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[]  = [
    new Recipes('A Test Recipe', 'A sample text description', 'https://files2.hungryforever.com/wp-content/uploads/2015/04/tamil.jpg'),
    new Recipes('A Test Recipe', 'A sample text description', 'https://files2.hungryforever.com/wp-content/uploads/2015/04/tamil.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
