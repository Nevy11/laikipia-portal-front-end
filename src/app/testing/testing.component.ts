import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'hinv-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TestingComponent implements AfterContentInit {
  vcr = inject(ViewContainerRef);

  ngAfterContentInit(): void {}
}
