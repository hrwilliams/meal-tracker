import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="high">Show 500+ calorie foods</option>
      <option value="low">Show foods under 500 calories</option>
    </select>
  <div *ngFor="let currentFood of childFoodList | calories:selectedCalories">
    <h3>{{ currentFood.name + " ||" }} {{ currentFood.calories + " calories || "}} {{"details: " + currentFood.details }} </h3>
  <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
