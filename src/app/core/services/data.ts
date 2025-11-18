import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'recipes'; // базовий URL додає інтерсептор

  constructor(private http: HttpClient) {}

  // GET всі страви
  getItems(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl).pipe(
      catchError(err => {
        console.error('Помилка при отриманні списку страв:', err);
        return throwError(() => new Error('Не вдалося завантажити список страв'));
      })
    );
  }

  // GET одна страва
  getItemById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        console.error(`Помилка при отриманні страви з id=${id}:`, err);
        return throwError(() => new Error('Не вдалося завантажити страву'));
      })
    );
  }

  // POST — додати новий рецепт
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe).pipe(
      catchError(err => {
        console.error('Помилка при додаванні страви:', err);
        return throwError(() => new Error('Не вдалося додати страву'));
      })
    );
  }
}
