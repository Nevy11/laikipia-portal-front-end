import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { TestingService } from './testing.service';
import { filter, map } from 'rxjs';
import { myData } from './testing';

@Component({
  selector: 'hinv-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TestingComponent implements AfterContentInit {
  // vcr = inject(ViewContainerRef);
  // constructor(private testingService: TestingService) {}

  // addName$ = this.testingService.addName;
  // showName: boolean = true;
  // getName$ = this.testingService.getData$;
  // updateName = this.testingService.updateName$;
  // deleteName$ = this.testingService.deleteName$.subscribe((x) =>
  // console.log('x')
  // );
  ngAfterContentInit(): void {}
}
