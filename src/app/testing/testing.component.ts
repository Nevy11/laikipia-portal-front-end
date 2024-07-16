import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  contentChild,
} from '@angular/core';
import { AppTimetableComponent } from '../app-timetable/app-timetable.component';
import { FinanceComponent } from '../app-dash/finance/finance.component';
import { TestingService } from './testing.service';

@Component({
  selector: 'hinv-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent implements OnInit {
  // name = 'Hannetsiagas';
  timetable = this.vcr.createComponent(AppTimetableComponent);
  toggleValue: boolean = true;
  data$ = this.testingService.roomsData$;
  cats$ = this.testingService.cats$.subscribe((resp) => {
    console.log(resp);
  });
  @ViewChild('jina', { static: true }) jina!: ElementRef;
  @ViewChild('age', { static: true }) age!: ElementRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild(AppTimetableComponent, { static: true })
  // timetable!: ViewContainerRef;
  @ContentChild(FinanceComponent) financeComponent!: FinanceComponent;
  constructor(
    private vcr: ViewContainerRef,
    private testingService: TestingService
  ) {}
  ngOnInit(): void {
    this.jina.nativeElement.innerText = 'Hilton Hotel';
    this.name.nativeElement.innerText = 'Hannetsiagas';
    // console.log(this.name);
    this.age.nativeElement.innerText = 23;
    // console.log('Timetable: ');
    // console.log(this.age);
    // this.toggleValue
    //   ? this.timetable.destroy()
    //   : console.log('Timetable shown');
    // const firstElement = this.vcr.get(0)?.detach();
    // console.log(firstElement);
    this.financeComponent.name = '';
    console.log(this.data$);
  }
  toggle() {
    this.toggleValue = !this.toggleValue;
    if (this.toggleValue) {
      this.timetable.destroy();
      this.toggleValue = false;
    }
    if (this.toggleValue === false) {
      this.toggleValue = true;
    }
    // console.log('Timetable shown in the toggle button');
  }
}
