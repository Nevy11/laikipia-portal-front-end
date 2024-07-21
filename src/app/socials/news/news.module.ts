import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewsComponent, NewsContentComponent],
  imports: [CommonModule, NewsRoutingModule, MatCardModule, MatButtonModule],
})
export class NewsModule {}
