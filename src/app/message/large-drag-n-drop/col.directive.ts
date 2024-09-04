import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvCol]',
})
export class ColDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'flex', '1 0 0%');
    this.renderer.setStyle(this.element.nativeElement, 'flex-grow', '1');
    this.renderer.setStyle(this.element.nativeElement, 'flex-shrink', '0');
    this.renderer.setStyle(this.element.nativeElement, 'flex-basis', '0%');
  }
}
