import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RegisterUnitRoutingModule } from './register-unit-routing.module';
import { RegisterUnitComponent } from './register-unit.component';
import { AllowRegistrationComponent } from './allow-registration/allow-registration.component';

@NgModule({
  declarations: [RegisterUnitComponent, AllowRegistrationComponent],
  imports: [CommonModule, RegisterUnitRoutingModule, MatTableModule],
})
export class RegisterUnitModule {}
