import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'hinv-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TestingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('first', { read: ElementRef }) firstName!: ElementRef<HTMLElement>;
  @ViewChild('last', { read: ElementRef }) lastName!: ElementRef<HTMLElement>;

  firstNameAutofilled!: boolean;
  lastNameAutofilled!: boolean;
  fName: string = '';
  lName: string = '';
  constructor(private _autofill: AutofillMonitor) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this._autofill.monitor(this.firstName).subscribe((e) => {
      this.firstNameAutofilled = e.isAutofilled;
    });
    this._autofill.monitor(this.lastName).subscribe((e) => {
      this.lastNameAutofilled = e.isAutofilled;
    });
  }
  ngOnDestroy(): void {
    this._autofill.stopMonitoring(this.firstName);
    this._autofill.stopMonitoring(this.lastName);
  }
  generate() {
    console.log();
  }
}
