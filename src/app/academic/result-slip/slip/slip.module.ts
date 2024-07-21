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

@NgModule({
  declarations: [SlipComponent, TitleComponent, MarksTableComponent, KeysComponent, KeyGradingSystemComponent, OtherKeysComponent, BottomComponent, NbComponent],
  imports: [CommonModule, SlipRoutingModule, MatTableModule],
})
export class SlipModule {}
