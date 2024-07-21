import { Component, ViewContainerRef, inject } from '@angular/core';
import { NewsContentComponent } from './news-content/news-content.component';

@Component({
  selector: 'hinv-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(NewsContentComponent);
  }
}
