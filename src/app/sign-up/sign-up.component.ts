import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, shareReplay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  constructor(private router: Router) {}
  signUp() {
    this.router.navigateByUrl('addCredentials');
  }
}

// effect(() => {});
