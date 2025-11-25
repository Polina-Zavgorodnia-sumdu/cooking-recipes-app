import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  title = 'Cooking Recipes App';

  isAuth$;                   // ❗ оголосили, але не ініціалізуємо тут
  userEmail: string | null = null;

  constructor(private auth: AuthService) {

    // ✔ тепер ініціалізація коректна
    this.isAuth$ = this.auth.authState$;

    this.isAuth$.subscribe(() => {
      this.userEmail = this.auth.getUserEmail();
    });
  }

  logout() {
    this.auth.logout();
  }
}
