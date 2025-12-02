import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCard } from './item-card';
import { ShortenDescriptionPipe } from '../shared/pipes/shorten-description-pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemCardComponent', () => {
  let component: ItemCard;
  let fixture: ComponentFixture<ItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCard, ShortenDescriptionPipe, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCard);
    component = fixture.componentInstance;

    component.recipe = {
      id: 1,
      title: 'Борщ',
      description: 'Традиційна українська страва з буряком.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg',
      ingredients: [],
      tags: []
    };

    fixture.detectChanges();
  });

  it('має відображати назву страви', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Борщ');
  });

  it('має відображати короткий опис через пайп', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Традиційна українська страва з буряком.');
  });

  it('має містити посилання "Детальніше"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.details-link');
    expect(link).toBeTruthy();
  });
});
