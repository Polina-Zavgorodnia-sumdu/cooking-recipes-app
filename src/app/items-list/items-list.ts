import { Component } from '@angular/core';
import { Recipe } from '../core/models/recipe.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {
  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Борщ',
      description: 'Традиційна українська страва з буряком.',
      imageUrl: 'assets/images/borshch.jpg',
      ingredients: ['буряк', 'капуста', 'картопля', 'м’ясо']
    },
    {
      id: 2,
      title: 'Вареники',
      description: 'Домашні вареники з картоплею.',
      imageUrl: 'assets/images/varenyky.jpg',
      ingredients: ['борошно', 'картопля', 'цибуля']
    },
    {
      id: 3,
      title: 'Олів’є',
      description: 'Класичний новорічний салат.',
      imageUrl: 'assets/images/olivie.jpg',
      ingredients: ['картопля', 'морква', 'яйця', 'ковбаса', 'огірки']
    }
  ];
}
