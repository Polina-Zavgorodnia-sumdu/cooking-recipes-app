import { Component } from '@angular/core';
import { Layout } from './layout/layout';
import {ItemsList} from './items-list/items-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [Layout, ItemsList], // підключаємо Layout
})
export class App {}

