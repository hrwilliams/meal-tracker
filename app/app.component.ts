import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Meal Tracker</h1>
    <h3 *ngFor="let currentFood of foods">{{ currentFood.name }}</h3>
  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food ("Test Food", 100, "delete me on the backend later"),
    new Food ("Test Food2", 200, "delete me on the backend later")
  ];
}

export class Food {
  constructor(public name: string, public calories: number, public details: string){  
  }
}
