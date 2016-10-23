import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <h3>{{ currentFood.name + " ||" }} {{ currentFood.calories + " calories || "}} {{"details: " + currentFood.details }} </h3>
  <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
}