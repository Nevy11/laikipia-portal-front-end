import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SocialsRoutingModule } from './socials-routing.module';
import { SocialsComponent } from './socials.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { NoticeBoardContentComponent } from './notice-board/notice-board-content/notice-board-content.component';

@NgModule({
  declarations: [
    SocialsComponent,
    NoticeBoardComponent,
    NoticeBoardContentComponent,
  ],
  imports: [CommonModule, SocialsRoutingModule, MatCardModule],
})
export class SocialsModule {}
