import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private emailKey = 'authEmail';

  private authStateSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  authState$ = this.authStateSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: { email: string; password: string }) {
    return this.http.post('users', user);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`users?email=${email}`).pipe(
      map(users => {
        const found = users.find(u => u.password === password);
        if (!found) return false;

        localStorage.setItem(this.tokenKey, 'fake-jwt-' + Date.now());
        localStorage.setItem(this.emailKey, email);

        this.authStateSubject.next(true);
        return true;
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.emailKey);

    this.authStateSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUserEmail(): string | null {
    return localStorage.getItem(this.emailKey);
  }
}
