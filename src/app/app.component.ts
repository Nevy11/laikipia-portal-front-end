import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { AppService } from './app.service';
import { mergeMap } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AddCredentialsComponent } from './sign-up/add-credentials/add-credentials.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'LaikipiaPortal';
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(NavigationComponent);
    // this.vcr.createComponent(AddCredentialsComponent);
  }
  constructor(private appservice: AppService) {}
}
