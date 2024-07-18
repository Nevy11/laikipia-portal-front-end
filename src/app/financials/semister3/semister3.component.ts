import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Semister3Service } from './semister3.service';
import { Finance } from '../finance';

@Component({
  selector: 'hinv-semister3',
  templateUrl: './semister3.component.html',
  styleUrl: './semister3.component.scss',
})
export class Semister3Component implements OnInit {
  hideCost: boolean = true;
  btn!: number;
  breakPointObserver = inject(BreakpointObserver);
  isHandset$ = this.breakPointObserver.observe(Breakpoints.Handset);
  isPhone!: boolean;

  ngOnInit(): void {
    if (this.isHandset$) {
      console.log('Is Handset');
      this.isPhone = true;
    } else {
      this.isPhone = false;
      console.log('Laptop');
    }
  }
  showExpense(id: number) {
    this.hideCost = !this.hideCost;
    this.btn = id;
  }
}
