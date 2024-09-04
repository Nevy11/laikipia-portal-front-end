import { Component, inject } from '@angular/core';
import { SocialsService } from '../../socials.service';
import { news } from '../../socials';

@Component({
  selector: 'hinv-large-news-content',
  templateUrl: './large-news-content.component.html',
  styleUrl: './large-news-content.component.scss',
})
export class LargeNewsContentComponent {
  socialService = inject(SocialsService);
  news: news[] = this.socialService.news;
}
