import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ContentComponent } from './content/content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EventsComponent, ContentComponent],
  imports: [CommonModule, EventsRoutingModule, MatCardModule, MatButtonModule],
})
export class EventsModule {}
