import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DataService } from './data';
import { Recipe } from '../models/recipe.model';

describe('DataService (HTTP)', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('повертає список страв (GET /recipes)', () => {
    const mockRecipes: Recipe[] = [
      { id: 1, title: 'Борщ', description: '...', imageUrl: '', ingredients: [], tags: [] }
    ];

    service.getItems().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].title).toBe('Борщ');
    });

    const req = httpMock.expectOne('recipes');
    expect(req.request.method).toBe('GET');
    req.flush(mockRecipes);
  });
});
