import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'hinv-semister4',
  templateUrl: './semister4.component.html',
  styleUrl: './semister4.component.scss',
})
export class Semister4Component implements OnInit {
  hideCost = true;
  isPhone!: boolean;
  btn!: number;
  breakPointObserver = inject(BreakpointObserver);
  isHandset$ = this.breakPointObserver
    .observe(Breakpoints.Handset)
    .subscribe((data) => {
      console.log(data);
    });
  ngOnInit(): void {
    if (this.isHandset$) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }
  showExpense(id: number) {
    this.hideCost = !this.hideCost;
    this.btn = id;
  }
}
