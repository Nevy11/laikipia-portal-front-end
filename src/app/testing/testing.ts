export interface Testing {}
export interface Rooms {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
// testing component

// name = 'Hannetsiagas';
// timetable = this.vcr.createComponent(AppTimetableComponent);
// toggleValue: boolean = true;
// allRooms!: any;
// data$ = this.testingService.getAllRooms();
// data$ = this.activatedRoute.data.pipe(pluck('rooms'), shareReplay(1));

// cats$ = this.testingService.cats$;
// jokes$ = this.testingService.jokes$;

// addRoom$ = this.testingService.addRoom().subscribe;
// updateRoom$ = this.testingService.updateRoom('3').subscribe;
// .pipe(filter((resp) => resp instanceof HttpResponse))
// .subscribe();
// getRoom$ = this.testingService.getRoom('3').subscribe((resp) => {
// console.log(resp);
// });
// deleteRoom$ = this.testingService.deleteRoom('1').subscribe;
// @ViewChild('jina', { static: true }) jina!: ElementRef;
// @ViewChild('age', { static: true }) age!: ElementRef;
// @ViewChild('name', { static: true }) name!: ElementRef;
// @ViewChild(AppTimetableComponent, { static: true })
// timetable!: ViewContainerRef;
// @ContentChild(FinanceComponent) financeComponent!: FinanceComponent;
// constructor(
//   private vcr: ViewContainerRef,
//   private testingService: TestingService,
//   private activatedRoute: ActivatedRoute
// ) {}

// if (this.financeComponent) {
//   this.financeComponent.name = 'Stephen';
// }
// this.activatedRoute.data.subscribe((resp) => {
//   console.log(resp['rooms']['2']);
// });
// this.jina.nativeElement.innerText = 'Hilton Hotel';
// this.name.nativeElement.innerText = 'Hannetsiagas';
// this.age.nativeElement.innerText = 23;

// toggle() {
// console.log('pressed');
// return this.testingService.updateRoom('3').subscribe();
// }

// events: string[] = ['TestingNavigationComponent'];
// opened!: boolean;

// shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
// window.location.host
// );
// showFiller = false;
// readonly panelOpenState = signal(false);

// items = ['First Year', 'Second Year', 'Third Year', 'Forth Year'];
// expandedIndex = 0;

// Testing service
// constructor(private http: HttpClient) {}
// roomsData$ = this.http.get<Rooms[]>('http://localhost:3000/api/rooms').pipe();
// cats$ = this.http.get<string[]>('http://localhost:10000/api/rooms');
// jokes$ = this.http
//   .get<any>('http://localhost:3005/random_joke')
//   .pipe(filter((data) => data.setup));
// addRoom() {
//   const body = {
//     roomNumber: 43,
//     roomType: 'single Room',
//     amenities: 'computer, desk sink, table',
//     price: 5000,
//     photos: 'http://localhost:4990',
//     checkinTime: new Date().setFullYear(2003, 7, 16),
//     checkoutTime: new Date().setFullYear(2024, 7, 12),
//     rating: 3.4,
//   };
//   return this.http.post<Rooms>('http://localhost:10000/api/rooms', body, {
// reportProgress: true,
//   });
// }
// getRoom(id: string) {
//   return this.http.get<Rooms>(`http://localhost:10000/api/rooms/${id}`);
// }
// crud
// updateRoom(id: string) {
//   const body = {
//     roomNumber: id,
//     roomType: 'single Room',
//     amenities: 'Hot shower table',
//     price: 5000,
//     photos: 'http://localhost:4990',
//     checkinTime: new Date().setFullYear(2003, 7, 16),
//     checkoutTime: new Date().setFullYear(2024, 7, 12),
//     rating: 8.43,
//   };
//   return this.http.put<Rooms[]>(
//     `http://localhost:10000/api/rooms/${id}`,
//     body,
//     {}
//   );
// }
// deleteRoom(id: string) {
//   return this.http.delete<Rooms>(`http://localhost:10000/api/rooms/${id}`);
// }
// getAllRooms() {
//   return this.http.get<Rooms[]>('http://localhost:10000/api/rooms');
// }

// @ViewChild('first', { read: ElementRef }) firstName!: ElementRef<HTMLElement>;
//   @ViewChild('last', { read: ElementRef }) lastName!: ElementRef<HTMLElement>;

//   firstNameAutofilled!: boolean;
//   lastNameAutofilled!: boolean;
//   fName: string = '';
//   lName: string = '';
//   constructor(private _autofill: AutofillMonitor) {}
//   ngOnInit(): void {}
//   ngAfterViewInit(): void {
//     this._autofill.monitor(this.firstName).subscribe((e) => {
//       this.firstNameAutofilled = e.isAutofilled;
//     });
//     this._autofill.monitor(this.lastName).subscribe((e) => {
//       this.lastNameAutofilled = e.isAutofilled;
//     });
//   }
//   ngOnDestroy(): void {
//     this._autofill.stopMonitoring(this.firstName);
//     this._autofill.stopMonitoring(this.lastName);
//   }
//   generate() {
//     console.log();
//   }
