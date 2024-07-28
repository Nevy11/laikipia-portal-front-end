import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCredentialsRoutingModule } from './add-credentials-routing.module';
import { AddCredentialsComponent } from './add-credentials.component';


@NgModule({
  declarations: [
    AddCredentialsComponent
  ],
  imports: [
    CommonModule,
    AddCredentialsRoutingModule
  ]
})
export class AddCredentialsModule { }
