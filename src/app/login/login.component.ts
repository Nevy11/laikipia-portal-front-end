import { AutofillMonitor } from '@angular/cdk/text-field';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('regNo', { read: ElementRef }) regNo!: ElementRef<HTMLElement>;
  hide = signal(true);
  regNumber!: boolean;
  registrationNumber: string = '';
  lastNameAutofilled!: boolean;
  constructor(private _autofill: AutofillMonitor, private router: Router) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this._autofill.monitor(this.regNo).subscribe((e) => {
      this.regNumber = e.isAutofilled;
    });
  }
  ngOnDestroy(): void {
    this._autofill.stopMonitoring(this.regNo);
  }
  login() {
    this.router.navigateByUrl('dashboard');
  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
