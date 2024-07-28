import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

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
