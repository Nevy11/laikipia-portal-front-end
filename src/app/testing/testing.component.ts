import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { AppTimetableComponent } from '../app-timetable/app-timetable.component';
import { FinanceComponent } from '../app-dash/finance/finance.component';
import { TestingService } from './testing.service';
import { pluck, shareReplay } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TestingComponent implements OnInit {
  // name = 'Hannetsiagas';
  timetable = this.vcr.createComponent(AppTimetableComponent);
  toggleValue: boolean = true;
  allRooms!: any;
  // data$ = this.testingService.getAllRooms();
  data$ = this.activatedRoute.data.pipe(pluck('rooms'), shareReplay(1));

  cats$ = this.testingService.cats$;
  jokes$ = this.testingService.jokes$;

  addRoom$ = this.testingService.addRoom().subscribe;
  updateRoom$ = this.testingService.updateRoom('3').subscribe;
  // .pipe(filter((resp) => resp instanceof HttpResponse))
  // .subscribe();
  getRoom$ = this.testingService.getRoom('3').subscribe((resp) => {
    // console.log(resp);
  });
  deleteRoom$ = this.testingService.deleteRoom('1').subscribe;
  @ViewChild('jina', { static: true }) jina!: ElementRef;
  @ViewChild('age', { static: true }) age!: ElementRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild(AppTimetableComponent, { static: true })
  // timetable!: ViewContainerRef;
  @ContentChild(FinanceComponent) financeComponent!: FinanceComponent;
  constructor(
    private vcr: ViewContainerRef,
    private testingService: TestingService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.financeComponent) {
      this.financeComponent.name = 'Stephen';
    }
    this.activatedRoute.data.subscribe((resp) => {
      console.log(resp['rooms']['2']);
    });
    this.jina.nativeElement.innerText = 'Hilton Hotel';
    this.name.nativeElement.innerText = 'Hannetsiagas';
    this.age.nativeElement.innerText = 23;
  }
  toggle() {
    console.log('pressed');
    return this.testingService.updateRoom('3').subscribe();
  }

  events: string[] = ['TestingNavigationComponent'];
  opened!: boolean;

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
  // window.location.host
  // );
  showFiller = false;
  readonly panelOpenState = signal(false);

  items = ['First Year', 'Second Year', 'Third Year', 'Forth Year'];
  expandedIndex = 0;
}
