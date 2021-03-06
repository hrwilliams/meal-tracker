import { Component } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Meal Tracker</h1>
    <food-list
      [childFoodList]="masterFoodList"
      (clickSender)="showDetails($event)"
    ></food-list>
    <edit-food
      [childSelectedFood]="selectedFood"
      (doneClickedSender)="finishedEditing()"
    ></edit-food>
    <new-food
      (newFoodSender)="addFood($event)"
      ></new-food>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
