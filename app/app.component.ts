import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Meal Tracker</h1>
    <h3 (click)="showDetails(currentFood)" *ngFor="let currentFood of foods">{{ currentFood.name + " ||" }} {{ currentFood.calories + " calories || "}} {{"details: " + currentFood.details }} </h3>
    <h1>Edit Food</h1>
    <div>
      <label>Enter Food Name:</label>
      <input [(ngModel)]="selectedFood.name">
    </div>
    <div>
      <label>Enter calories:</label>
      <input [(ngModel)]="selectedFood.calories">
    </div>
    <div>
      <label>Enter details:</label>
      <input [(ngModel)]="selectedFood.details">
    </div>
  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food ("Test Food", 100, "delete me on the backend later"),
    new Food ("Test Food2", 200, "delete me on the backend later")
  ];
  selectedFood: Food = this.foods[0];
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }

}

export class Food {
  constructor(public name: string, public calories: number, public details: string){
  }
}
