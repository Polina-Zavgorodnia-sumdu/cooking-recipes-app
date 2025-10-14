import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../core/models/recipe.model';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../core/services/data';  // додано
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  imports: [CommonModule, ItemCard, FormsModule]
})
export class ItemsList implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];  //додано
  searchTerm: string = '';

  constructor(private dataService: DataService) {}  // інжекція сервісу

  ngOnInit(): void {
    this.recipes = this.dataService.getItems();
    this.filteredRecipes = this.recipes; // спочатку показуємо всі страви
  }

  ngOnChanges(): void {
    this.applyFilter();
  }

  //Фільтрація рецептів за введеним словом
  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term)
    );
  }

  //Викликаємо фільтрацію при зміні поля вводу
  onSearchChange(): void {
    this.applyFilter();
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('Подія отримана у ItemsList! Обраний рецепт:', recipe.title);
  }
}
