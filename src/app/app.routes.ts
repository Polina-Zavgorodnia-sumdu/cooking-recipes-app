import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';
import { AuthGuard } from './core/guards/auth-guard';
import {LoginComponent} from './auth/login/login';
import {RegisterComponent} from './auth/register/register';

export const routes: Routes = [
  { path: 'items', component: ItemsList },
  { path: 'items/:id', component: ItemDetails },

  // 🔒 захищені маршрути
  { path: 'add', component: ItemForm, canActivate: [AuthGuard] },

  // auth pages
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: '/items', pathMatch: 'full' }
];
