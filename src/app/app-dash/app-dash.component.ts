import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-app-dash',
  templateUrl: './app-dash.component.html',
  styleUrl: './app-dash.component.scss',
})
export class AppDashComponent implements OnInit, AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);
  studentName: string = 'Stephen Mainda';
  phoneStudentName: string = 'Stephen';
  regNo: string = 'SC/COM/0032/22';
  year: number = 2;
  sem: number = 3;
  feeBalance: number = 16500;
  progressValue: number = 70;
  course: string = 'Bachelor of science(Computer Science';

  constructor(private render: Renderer2, private elementRef: ElementRef) {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: this.phoneStudentName,
            cols: 2,
            rows: 1,
            // content: `Reg No: ${this.regNo} \n Year: ${this.year} semister ${this.sem}`,
            regNo: this.regNo,
            year: this.year,
            sem: this.sem,
            studentInfo: true,
            course: 'Bachelor of Science(ComputerScience)',
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
          cols: 2,
          rows: 1,
          // content: `Reg No: ${this.regNo} \n Year: ${this.year}, ${this.sem}`,
          regNo: this.regNo,
          year: this.year,
          sem: this.sem,
          studentInfo: true,
          course: 'Bachelor of Science( Computer Science )',
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
          title: 'Finance',
          cols: 1,
          rows: 2,
          content: 'this is a Stupid',
          bufferValue: 30,
          finance: true,
          FeeBalance: this.feeBalance,
          mobileDevice: false,
        },
        {
          title: 'Virtual Assistant',
          cols: 1,
          rows: 1,
          content: 'wooow',
          bufferValue: 30,
          virtualAssistant: true,
        },
      ];
    })
  );
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const element =
      this.elementRef.nativeElement.querySelector('.progress-bar');
    this.render.setStyle(element, 'width', `${this.progressValue.toString()}%`);
    const progress_bar =
      this.elementRef.nativeElement.querySelector('.progress-bar');
    this.render.setStyle(progress_bar, 'background-color', 'gray');
    this.render.setStyle(progress_bar, 'color', 'white');
  }
}
