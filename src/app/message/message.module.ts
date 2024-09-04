import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { LargeDragNDropComponent } from './large-drag-n-drop/large-drag-n-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RowDirective } from './large-drag-n-drop/row.directive';
import { ColDirective } from './large-drag-n-drop/col.directive';

@NgModule({
  declarations: [MessageComponent, LargeDragNDropComponent, RowDirective, ColDirective],
  imports: [CommonModule, MessageRoutingModule, DragDropModule],
})
export class MessageModule {}
