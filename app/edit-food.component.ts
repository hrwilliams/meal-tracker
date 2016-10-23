import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
    <h1>Edit Food</h1>
    <div>
      <label>Enter Food Name:</label>
      <input [(ngModel)]="childSelectedFood.name">
    </div>
    <div>
      <label>Enter calories:</label>
      <input [(ngModel)]="childSelectedFood.calories">
    </div>
    <div>
      <label>Enter details:</label>
      <input [(ngModel)]="childSelectedFood.details">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
