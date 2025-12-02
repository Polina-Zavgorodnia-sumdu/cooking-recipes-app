import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';
import { AuthGuard } from './core/guards/auth-guard';
import {Login} from './auth/login/login';
import {Register} from './auth/register/register';

export const routes: Routes = [
  { path: 'items', component: ItemsList },
  { path: 'items/:id', component: ItemDetails },

  // 🔒 захищені маршрути
  { path: 'add', component: ItemForm, canActivate: [AuthGuard] },

  // auth pages
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: '', redirectTo: '/items', pathMatch: 'full' }
];
