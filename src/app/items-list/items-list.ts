import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCard } from '../item-card/item-card';
import { Recipe } from '../core/models/recipe.model';
import { DataService } from '../core/services/data';
import {Observable} from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  imports: [CommonModule, FormsModule, ItemCard, RouterLink]
})
export class ItemsList {
  searchTerm: string = '';
  recipes$!: Observable<Recipe[]>;

  constructor(private dataService: DataService) {
    this.recipes$ = this.dataService.recipes$;
  }

  onSearchChange(): void {
    this.dataService.filterRecipes(this.searchTerm);
  }
}
