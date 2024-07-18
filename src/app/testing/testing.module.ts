import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingService } from './testing.service';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [TestingComponent],
  imports: [CommonModule, TestingRoutingModule, HttpClientModule, RouterLink],
  exports: [TestingComponent],
  providers: [TestingService],
})
export class TestingModule {}
