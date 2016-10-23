import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h1>New Food</h1>
  <div>
    <label>Enter Food Name:</label>
    <input #newName>
  </div>
  <div>
    <label>Enter Calories:</label>
    <input #newCalories>
  </div>
  <div>
    <label>Enter detials:</label>
    <input #newDetails>
    <button (click)="
      addClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value='';
      vewDetails.value='';
    ">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
