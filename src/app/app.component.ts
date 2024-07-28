import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { AppService } from './app.service';
import { mergeMap } from 'rxjs';

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
  }
  constructor(private appservice: AppService) {}
  usersInfo$ = this.appservice.usersInfo$.subscribe((resp) => {
    console.log(resp);
  });
  removeStudent$ = this.appservice.removeUser$.subscribe(() => {});
  findOneStudent$ = this.appservice.findOneStudent$.subscribe((resp) => {
    console.log(resp);
  });
}
