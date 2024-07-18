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
import { filter, map, pluck, shareReplay } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Rooms } from './testing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
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
    // console.log(this.name);
    this.age.nativeElement.innerText = 23;
    // console.log('Timetable: ');
    // console.log(this.age);
    // this.toggleValue
    //   ? this.timetable.destroy()
    //   : console.log('Timetable shown');
    // const firstElement = this.vcr.get(0)?.detach();
    // console.log(firstElement);

    // console.log(this.data$);
    // this.data$.unsubscribe();
  }
  toggle() {
    console.log('pressed');
    return this.testingService.updateRoom('3').subscribe();
  }
}
