import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from '../core/models/recipe.model';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import { ShortenDescriptionPipe } from '../shared/pipes/shorten-description-pipe';
import { HoverHighlightDirective } from '../shared/directives/hover-highlight';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css'],
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    RouterLink,
    ShortenDescriptionPipe,
    HoverHighlightDirective
  ]
})
export class ItemCard {
  @Input() recipe!: Recipe;
  @Output() selectRecipe = new EventEmitter<Recipe>();
  hoveredTag: string | null = null;
  // Метод, що викликається при кліку
  onSelect(): void {
    console.log('Усередині ItemCard: натиснули Детальніше для', this.recipe.title);
    this.selectRecipe.emit(this.recipe);
  }
}
