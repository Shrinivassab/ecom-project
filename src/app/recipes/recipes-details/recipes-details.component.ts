import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent implements OnInit {

  recipeManageDropdown: SelectItem[];
  constructor() { }

  ngOnInit() {
    this.recipeManageDropdown = [
      {label: 'To Shopping List', value: 'list'},
      {label: 'Edit Recipe', value: 'edit'},
      {label: 'Delete Recipe', value: 'del'},
    ];
  }



}
