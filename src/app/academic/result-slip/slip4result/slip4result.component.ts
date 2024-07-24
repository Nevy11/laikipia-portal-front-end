import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NbComponent } from '../slip/bottom/nb/nb.component';
import { LuInfoComponent } from '../../../financials/fee-structure/lu-info/lu-info.component';
import { TitleComponent } from '../slip/title/title.component';
import { StudentInfo2Component } from '../../../financials/fee-structure/student-info2/student-info2.component';
import { MarksTable4Component } from '../slip/marks-table4/marks-table4.component';
import { KeysComponent } from '../slip/keys/keys.component';
import { BottomComponent } from '../slip/bottom/bottom.component';

@Component({
  selector: 'hinv-slip4result',
  templateUrl: './slip4result.component.html',
  styleUrl: './slip4result.component.scss',
})
export class Slip4resultComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(LuInfoComponent);
    this.vcr.createComponent(TitleComponent);
    this.vcr.createComponent(StudentInfo2Component);
    this.vcr.createComponent(MarksTable4Component);
    this.vcr.createComponent(KeysComponent);
    this.vcr.createComponent(BottomComponent);
    this.vcr.createComponent(NbComponent);
  }
}
