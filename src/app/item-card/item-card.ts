import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from '../core/models/recipe.model';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.html',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() recipe!: Recipe;
  // Подія вибору рецепта
  @Output() selectRecipe = new EventEmitter<Recipe>();
  hoveredTag: string | null = null;
  // Метод, що викликається при кліку
  onSelect(): void {
    console.log('Усередині ItemCard: натиснули Детальніше для', this.recipe.title);
    this.selectRecipe.emit(this.recipe);
  }
}
