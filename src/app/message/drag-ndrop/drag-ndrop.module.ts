import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNdropRoutingModule } from './drag-ndrop-routing.module';
import { DragNdropComponent } from './drag-ndrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DragNdropComponent],
  imports: [CommonModule, DragNdropRoutingModule, DragDropModule],
})
export class DragNdropModule {}
