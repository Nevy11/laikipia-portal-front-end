import { Component, OnInit, ViewContainerRef, inject } from '@angular/core';
import { LargeNewsContentComponent } from './large-news-content/large-news-content.component';

@Component({
  selector: 'hinv-large-news',
  templateUrl: './large-news.component.html',
  styleUrl: './large-news.component.scss',
})
export class LargeNewsComponent implements OnInit {
  vcr = inject(ViewContainerRef);
  ngOnInit(): void {
    this.vcr.createComponent(LargeNewsContentComponent);
  }
}
