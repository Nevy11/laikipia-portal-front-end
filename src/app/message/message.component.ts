import {
  AfterContentInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { DragNdropComponent } from './drag-ndrop/drag-ndrop.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LargeDragNDropComponent } from './large-drag-n-drop/large-drag-n-drop.component';

@Component({
  selector: 'hinv-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements AfterContentInit {
  vcr = inject(ViewContainerRef);
  breakpointObserver = inject(BreakpointObserver);
  ngAfterContentInit(): void {
    this.breakpointObserver.observe(Breakpoints.Large).subscribe((resp) => {
      if (resp.matches) {
        this.vcr.clear();
        this.vcr.createComponent(LargeDragNDropComponent);
      } else {
        this.vcr.clear();
        this.vcr.createComponent(DragNdropComponent);
      }
    });
  }
}
