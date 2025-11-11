import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';

export const routes: Routes = [
  { path: 'items', component: ItemsList },
  { path: 'items/:id', component: ItemDetails },
  { path: 'add', component: ItemForm },
  { path: '', redirectTo: '/items', pathMatch: 'full' } // перенаправлення за замовчуванням
];
