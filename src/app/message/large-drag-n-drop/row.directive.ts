import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvRow]',
})
export class RowDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'flexWrap', 'wrap');
    this.renderer.setStyle(
      this.element.nativeElement,
      'marginTop',
      'calc(-1 * 0)'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'marginRight',
      'calc(-0.5 * 1.5rem)'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'marginLeft',
      'calc(-0.5 * 1.5rem)'
    );
  }
}
