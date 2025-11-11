import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data';
import { Recipe } from '../core/models/recipe.model';

@Component({
  selector: 'app-item-form',
  standalone: true,
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ItemForm {
  recipeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm(): void {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required]],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),
      tags: this.fb.control('')
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      this.recipeForm.markAllAsTouched();
      return;
    }

    const newRecipe: Recipe = {
      id: Date.now(), // простий спосіб згенерувати унікальний id
      ...this.recipeForm.value,
      tags: this.recipeForm.value.tags
        ? this.recipeForm.value.tags.split(',').map((t: string) => t.trim())
        : []
    };

    this.dataService.addRecipe(newRecipe);
    alert('Рецепт успішно додано!');
    this.router.navigate(['/items']);
  }
}
