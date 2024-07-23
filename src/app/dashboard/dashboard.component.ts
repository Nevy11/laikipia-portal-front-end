import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'hinv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  firstName: string = this.dashService.studentFirstName;
  middleName: string = this.dashService.studentMiddleName;
  studentName: string = this.firstName.concat(this.middleName);
  lastName: string = this.dashService.studentLastName;
  // studentFirstName: string = this.dashService.studentFirstName;
  regNo: string = this.dashService.regNo;
  year: number = this.dashService.year;
  sem: number = this.dashService.sem;
  feeBalance: number = this.dashService.feeBalance;
  progressValue: number = this.dashService.progressValue;
  course: string = this.dashService.course;
  mychoice!: string;
  constructor(
    private render: Renderer2,
    private elementRef: ElementRef,
    private router: Router,
    private dashService: DashboardService
  ) {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: this.studentName,
            cols: 2,
            rows: 1,
            // content: `Reg No: ${this.regNo} \n Year: ${this.year} semister ${this.sem}`,
            regNo: this.regNo,
            year: this.year,
            sem: this.sem,
            studentInfo: true,
            programme: this.dashService.programme,
            course: this.dashService.course,
            bufferValue: 10,
          },
          {
            title: 'hostels',
            cols: 1,
            rows: 1,
            content: ``,
            bufferValue: 10,
            house: '',
            hostelBooking: true,
          },
          {
            title: 'Assistant',
            cols: 1,
            rows: 1,
            content: 'Eeeuuu',
            bufferValue: 10,
            virtualAssistant: true,
          },
          {
            title: 'Finance',
            cols: 2,
            rows: 2,
            bufferValue: 10,
            finance: true,
            FeeBalance: this.feeBalance,
            mobileDevice: true,
          },
        ];
      }

      return [
        {
          title: this.studentName,
          firstName: this.firstName,
          lastName: this.lastName,
          cols: 2,
          rows: 1,
          // content: `Reg No: ${this.regNo} \n Year: ${this.year}, ${this.sem}`,
          regNo: this.regNo,
          year: this.year,
          sem: this.sem,
          studentInfo: true,
          programme: this.dashService.programme,
          course: this.dashService.course,
          bufferValue: 30,
        },
        {
          title: 'Book hostel',
          cols: 1,
          rows: 1,
          content: 'this is a funny',
          bufferValue: 30,
          hostelBooking: true,
        },
        {
          title: 'Virtual Assistant',
          cols: 1,
          rows: 1,
          content: 'wooow',
          bufferValue: 30,
          virtualAssistant: true,
        },
        {
          title: 'Finance',
          cols: 2,
          rows: 2,
          content: 'this is a Stupid',
          bufferValue: 30,
          finance: true,
          FeeBalance: this.feeBalance,
          mobileDevice: false,
        },
      ];
    })
  );

  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    const element =
      this.elementRef.nativeElement.querySelector('.progress-bar');
    this.render.setStyle(element, 'width', `${this.progressValue.toString()}%`);
    const progress_bar =
      this.elementRef.nativeElement.querySelector('.progress-bar');
    this.render.setStyle(progress_bar, 'background-color', 'gray');
    this.render.setStyle(progress_bar, 'color', 'white');
  }
  toFeeStructure() {
    this.router.navigateByUrl('finance');
  }
  toFeeStatement() {
    this.router.navigate(['finance', 'feeStructure']);
  }
  toEvaluation() {
    this.router.navigateByUrl('evaluations');
  }
  toRepository() {
    this.router.navigateByUrl('repository');
  }
  hostel(choice: string) {
    if (choice === 'bookHostel') {
      this.mychoice = 'bookHostel';
    } else {
      this.mychoice = 'history';
    }
  }
}
