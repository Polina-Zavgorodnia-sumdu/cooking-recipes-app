import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../core/services/data';
import { Recipe } from '../core/models/recipe.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css'],
  imports: [CommonModule, RouterLink]
})
export class ItemDetails implements OnInit {
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.dataService.getItemById(id);
  }
}
