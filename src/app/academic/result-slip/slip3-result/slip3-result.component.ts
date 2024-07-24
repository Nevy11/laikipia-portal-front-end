import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { LuInfoComponent } from '../../../financials/fee-structure/lu-info/lu-info.component';
import { TitleComponent } from '../slip/title/title.component';
import { StudentInfo2Component } from '../../../financials/fee-structure/student-info2/student-info2.component';
import { MarksTable3Component } from '../slip/marks-table3/marks-table3.component';
import { KeysComponent } from '../slip/keys/keys.component';
import { BottomComponent } from '../slip/bottom/bottom.component';
import { NbComponent } from '../slip/bottom/nb/nb.component';

@Component({
  selector: 'hinv-slip3-result',
  templateUrl: './slip3-result.component.html',
  styleUrl: './slip3-result.component.scss',
})
export class Slip3ResultComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(LuInfoComponent);
    this.vcr.createComponent(TitleComponent);
    this.vcr.createComponent(StudentInfo2Component);
    this.vcr.createComponent(MarksTable3Component);
    this.vcr.createComponent(KeysComponent);
    this.vcr.createComponent(BottomComponent);
    this.vcr.createComponent(NbComponent);
  }
}
