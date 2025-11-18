import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Observable, map, filter } from 'rxjs';

import { Recipe } from '../core/models/recipe.model';
import { DataService } from '../core/services/data';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ItemCard],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {
  searchTerm = '';
  recipes$!: Observable<Recipe[]>;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();

    // 🔥 перезавантажуємо дані кожного разу,
    // коли користувач повертається на /items
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadData();
      });
  }

  // 🔹 окремий метод, щоб зручно викликати перезавантаження
  loadData(): void {
    this.recipes$ = this.dataService.getItems().pipe(
      map(recipes =>
        recipes.filter(r =>
          r.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }

  // 🔹 пошук
  onSearchChange(): void {
    this.loadData();
  }
}
