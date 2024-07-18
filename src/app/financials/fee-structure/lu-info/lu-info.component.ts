import { Component, inject } from '@angular/core';
import { FeeStructureService } from '../fee-structure.service';

@Component({
  selector: 'hinv-lu-info',
  templateUrl: './lu-info.component.html',
  styleUrl: './lu-info.component.scss',
})
export class LuInfoComponent {
  feeStructureService = inject(FeeStructureService);
  schoolName: string = this.feeStructureService.schoolName;
  pOBox: string = this.feeStructureService.pOBox;
  Tel: string = this.feeStructureService.Tel;
  email: string = this.feeStructureService.email;
  web: string = this.feeStructureService.web;
}
