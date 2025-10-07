import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../core/models/recipe.model';
import { ItemCard } from '../item-card/item-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  imports: [CommonModule, ItemCard, FormsModule]   // підключаємо ngFor і компонент картки
})

export class ItemsList {
  searchTerm: string = '';

  get filteredRecipes(): Recipe[] {
    return this.recipes.filter(r =>
      r.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Борщ',
      description: 'Традиційна українська страва з буряком.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg',
      ingredients: ['буряк', 'капуста', 'картопля', 'м’ясо'],
      tags: ['Українська кухня', 'Борщі', 'Супи']
    },
    {
      id: 2,
      title: 'Вареники',
      description: 'Домашні вареники з картоплею.',
      imageUrl: 'https://galya-baluvana.kiev.ua/wp-content/uploads/2020/11/p1460824.jpg',
      ingredients: ['борошно', 'картопля', 'цибуля'],
      tags: ['Українська кухня']
    },
    {
      id: 3,
      title: 'Олів’є',
      description: 'Класичний новорічний салат.',
      imageUrl: 'https://fayni-recepty.com.ua/wp-content/uploads/2020/08/olivie.jpg',
      ingredients: ['картопля', 'морква', 'яйця', 'ковбаса', 'огірки'],
      tags: ['Радянська кухня', 'Святкові страви']
    },
    {
      id: 4,
      title: 'Празький торт',
      description: 'Шоколадний торт із ніжним кремом і глазур’ю.',
      imageUrl: 'https://kondishop.com.ua/image/catalog/blog/Prazhskii-po-gostu/Prajskiy_po_gostu_1.png',
      ingredients: ['борошно', 'яйця', 'какао', 'масло', 'шоколад'],
      tags: ['Радянська кухня', 'Десерти', 'Торти']
    },
    {
      id: 5,
      title: 'Гавайська піца',
      description: 'Піца з ананасами та шинкою.',
      imageUrl: 'https://znatnakurka.ua/sites/default/files/2024-02/a2667dc0e9c5adf9c220e194164339f8-1.jpeg',
      ingredients: ['борошно', 'ананаси', 'курка', 'сир'],
      tags: ['Канадська кухня', 'Піци']
    },
    {
      id: 6,
      title: 'Суші',
      description: 'Класичні роли з рисом, норі та рибою.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Homemade_sushi_rolls%2C_2009_%282%29.jpg',
      ingredients: ['рис', 'норі', 'риба', 'овочі'],
      tags: ['Японська кухня', 'Морепродукти']
    },
    {
      id: 7,
      title: 'Тако',
      description: 'Мексиканська страва з тортильї з начинкою.',
      imageUrl: 'https://shuba.life/static/content/thumbs/1200x630/8/1b/onqaqi---c1200x630x50px50p-up--a7d8e3690a95aa4efc665a5e9c2ff1b8.jpg',
      ingredients: ['тортилья', 'м’ясо', 'сир', 'овочі'],
      tags: ['Мексиканська кухня', 'Вулична їжа']
    }
  ];
  // Метод, який спрацьовує при виборі рецепта
  onRecipeSelected(recipe: Recipe) {
    console.log('Подія отримана у ItemsList! Обраний рецепт:', recipe.title);
  }
}
