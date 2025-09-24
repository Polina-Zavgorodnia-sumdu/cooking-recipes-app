import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../core/models/recipe.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  imports: [CommonModule, ItemCard]   // 👈 підключаємо ngFor і компонент картки
})

export class ItemsList {
  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Борщ',
      description: 'Традиційна українська страва з буряком.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg',
      ingredients: ['буряк', 'капуста', 'картопля', 'м’ясо']
    },
    {
      id: 2,
      title: 'Вареники',
      description: 'Домашні вареники з картоплею.',
      imageUrl: 'https://galya-baluvana.kiev.ua/wp-content/uploads/2020/11/p1460824.jpg',
      ingredients: ['борошно', 'картопля', 'цибуля']
    },
    {
      id: 3,
      title: 'Олів’є',
      description: 'Класичний новорічний салат.',
      imageUrl: 'https://fayni-recepty.com.ua/wp-content/uploads/2020/08/olivie.jpg',
      ingredients: ['картопля', 'морква', 'яйця', 'ковбаса', 'огірки']
    }
  ];
}
