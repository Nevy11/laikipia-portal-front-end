import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';

@NgModule({
  declarations: [CurriculumComponent],
  imports: [CommonModule, CurriculumRoutingModule, MatExpansionModule],
})
export class CurriculumModule {}
