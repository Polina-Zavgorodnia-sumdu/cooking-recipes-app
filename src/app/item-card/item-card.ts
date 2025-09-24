import { Component, Input } from '@angular/core';
import { Recipe } from '../core/models/recipe.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() recipe!: Recipe;
}
