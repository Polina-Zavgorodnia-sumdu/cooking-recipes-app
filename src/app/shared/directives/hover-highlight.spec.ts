import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HoverHighlightDirective } from './hover-highlight';

@Component({
  template: `<div appHoverHighlight>Test</div>`
})
class TestHostComponent {}

describe('HoverHighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HoverHighlightDirective, TestHostComponent]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('створена директива', () => {
    const element = fixture.nativeElement.querySelector('div');
    expect(element).toBeTruthy();
  });
});
