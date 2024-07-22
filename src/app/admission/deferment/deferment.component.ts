import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { DefermentTitleComponent } from './deferment-title/deferment-title.component';
import { DefermentTableComponent } from './deferment-table/deferment-table.component';

@Component({
  selector: 'hinv-deferment',
  templateUrl: './deferment.component.html',
  styleUrl: './deferment.component.scss',
})
export class DefermentComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(DefermentTitleComponent);
    this.vcr.createComponent(DefermentTableComponent);
  }
}
