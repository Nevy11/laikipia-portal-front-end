import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    MatIconModule,
    MatTreeModule,
  ],
})
export class RepositoryModule {}
