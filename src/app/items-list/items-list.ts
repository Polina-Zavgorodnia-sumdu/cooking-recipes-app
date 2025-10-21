import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../core/models/recipe.model';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../core/services/data';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  imports: [CommonModule, ItemCard, FormsModule]
})
export class ItemsList implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  searchTerm: string = '';

  private recipesSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 🔹 Підписка на BehaviorSubject (recipes$)
    this.recipesSubscription = this.dataService.recipes$.subscribe({
      next: (data: Recipe[]) => {
        this.recipes = data;
      },
      error: (err: any) => console.error('Помилка під час підписки:', err),
      complete: () => console.log('Підписку завершено.')
    });
  }

  // 🔹 Викликає фільтрацію в сервісі
  onSearchChange(): void {
    this.dataService.filterRecipes(this.searchTerm);
  }

  onRecipeSelected(recipe: Recipe): void {
    console.log('Обраний рецепт:', recipe.title);
  }

  ngOnDestroy(): void {
    if (this.recipesSubscription) {
      this.recipesSubscription.unsubscribe();
      console.log('Відписка від BehaviorSubject виконана.');
    }
  }
}
