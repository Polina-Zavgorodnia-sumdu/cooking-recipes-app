import { Component } from '@angular/core';
import { Layout } from './layout/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [Layout], // підключаємо Layout
})
export class App {}

