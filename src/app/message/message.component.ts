import {
  AfterContentInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { DragNdropComponent } from '../drag-ndrop/drag-ndrop.component';

@Component({
  selector: 'hinv-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements AfterContentInit {
  vcr = inject(ViewContainerRef);
  ngAfterContentInit(): void {
    this.vcr.createComponent(DragNdropComponent);
  }
}
