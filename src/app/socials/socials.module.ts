import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SocialsRoutingModule } from './socials-routing.module';
import { SocialsComponent } from './socials.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NoticeBoardContentComponent } from './notice-board/notice-board-content/notice-board-content.component';
import { LargeNewsComponent } from './large-news/large-news.component';
import { LargeNewsContentComponent } from './large-news/large-news-content/large-news-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SocialsComponent,
    NoticeBoardComponent,
    NoticeBoardContentComponent,
    LargeNewsComponent,
    LargeNewsContentComponent,
  ],
  imports: [
    CommonModule,
    SocialsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SocialsModule {}
