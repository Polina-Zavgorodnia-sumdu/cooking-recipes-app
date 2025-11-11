import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 0 12px rgba(89, 0, 10, 0.5)');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-4px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.2s ease');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
  }
}
