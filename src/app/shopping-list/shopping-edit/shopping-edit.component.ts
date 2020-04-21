import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameInput: ElementRef;
  @ViewChild('inputAmount') amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit() {
  }


  onClickAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingAmount);
    this.addIngredient.emit(newIngredient);
  }
}
