import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { LuInfoComponent } from '../../../financials/fee-structure/lu-info/lu-info.component';
import { StudentInfo2Component } from '../../../financials/fee-structure/student-info2/student-info2.component';
import { TitleComponent } from './title/title.component';
import { MarksTableComponent } from './marks-table/marks-table.component';
import { KeysComponent } from './keys/keys.component';
import { BottomComponent } from './bottom/bottom.component';
import { NbComponent } from './bottom/nb/nb.component';

@Component({
  selector: 'hinv-slip',
  templateUrl: './slip.component.html',
  styleUrl: './slip.component.scss',
})
export class SlipComponent implements AfterViewInit {
  // @ContentChild(LuInfoComponent, { static: true }) luInfo!: ViewContainerRef;
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(LuInfoComponent);
    this.vcr.createComponent(TitleComponent);
    this.vcr.createComponent(StudentInfo2Component);
    this.vcr.createComponent(MarksTableComponent);
    this.vcr.createComponent(KeysComponent);
    this.vcr.createComponent(BottomComponent);
    this.vcr.createComponent(NbComponent);
  }
}
