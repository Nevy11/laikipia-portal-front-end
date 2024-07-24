import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SlipRoutingModule } from './slip-routing.module';
import { SlipComponent } from './slip.component';
import { TitleComponent } from './title/title.component';
import { MarksTableComponent } from './marks-table/marks-table.component';
import { KeysComponent } from './keys/keys.component';
import { KeyGradingSystemComponent } from './keys/key-grading-system/key-grading-system.component';
import { OtherKeysComponent } from './keys/other-keys/other-keys.component';
import { BottomComponent } from './bottom/bottom.component';
import { NbComponent } from './bottom/nb/nb.component';
import { MarksTable2Component } from './marks-table2/marks-table2.component';
import { MarksTable3Component } from './marks-table3/marks-table3.component';
import { MarksTable4Component } from './marks-table4/marks-table4.component';

@NgModule({
  declarations: [
    SlipComponent,
    TitleComponent,
    MarksTableComponent,
    KeysComponent,
    KeyGradingSystemComponent,
    OtherKeysComponent,
    BottomComponent,
    NbComponent,
    MarksTable2Component,
    MarksTable3Component,
    MarksTable4Component,
  ],
  imports: [CommonModule, SlipRoutingModule, MatTableModule],
})
export class SlipModule {}
