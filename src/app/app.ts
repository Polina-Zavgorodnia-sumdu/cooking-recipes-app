import { Component } from '@angular/core';
import { Layout } from './layout/layout';
import {ItemsList} from './items-list/items-list';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [Layout, RouterOutlet], // підключаємо Layout
})
export class App {}

