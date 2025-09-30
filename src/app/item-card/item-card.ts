import { Component, Input } from '@angular/core';
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
  hoveredTag: string | null = null;
}
