import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipes} from "../../recipes.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipes;
  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
