import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-app-dash',
  templateUrl: './app-dash.component.html',
  styleUrl: './app-dash.component.scss',
})
export class AppDashComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.cards.subscribe((data) => console.log(data)));
  }
  private breakpointObserver = inject(BreakpointObserver);
  studentName: string = 'Stephen Mainda';
  regNo: string = 'SC/COM/0032/22';
  year: number = 2;
  sem: number = 3;
  progressValue: number = 70;
  course: string = 'Bachelor of science(Computer Science';
  /** Based on the screen size, switch from standard to one column per row */

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      console.log(matches);
      if (matches) {
        return [
          {
            title: 'Card one',
            cols: 1,
            rows: 1,
            // content: `Reg No: ${this.regNo} \n Year: ${this.year} semister ${this.sem}`,
            regNo: this.regNo,
            year: this.year,
            sem: this.sem,
            studentInfo: true,
            course: 'Bachelor of Science(ComputerScience)',
          },
          {
            title: 'Card two',
            cols: 1,
            rows: 1,
            content: ``,
          },
          { title: 'Card three', cols: 1, rows: 1, content: 'wierd' },
          { title: 'Card four', cols: 1, rows: 1, content: 'Eeeuuu' },
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
          course: 'Bachelor of Science(ComputerScience)',
        },
        { title: 'Card 2', cols: 1, rows: 1, content: 'this is a funny' },
        { title: 'Card 3', cols: 1, rows: 2, content: 'this is a Stupid' },
        { title: 'Card 4', cols: 1, rows: 1, content: 'wooow' },
      ];
    })
  );
}
