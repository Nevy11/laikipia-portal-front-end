import { Component, inject } from '@angular/core';
import { news } from '../../socials';
import { SocialsService } from '../../socials.service';

@Component({
  selector: 'hinv-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss',
})
export class NewsContentComponent {
  socialService = inject(SocialsService);
  news: news[] = this.socialService.news;
}
