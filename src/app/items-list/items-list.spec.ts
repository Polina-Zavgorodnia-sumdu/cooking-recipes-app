import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsList } from './items-list';
import { DataService } from '../core/services/data';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemsListComponent', () => {
  let component: ItemsList;
  let fixture: ComponentFixture<ItemsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsList, RouterTestingModule],
      providers: [
        {
          provide: DataService,
          useValue: {
            getItems: () => of([
              { id: 1, title: 'Борщ', description: '', imageUrl: '', ingredients: [], tags: [] }
            ])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('рендерить 1 item-card, якщо сервіс повернув 1 елемент', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-item-card');
    expect(cards.length).toBe(1);
  });
});
