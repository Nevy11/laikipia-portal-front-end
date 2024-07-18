import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppTimetableComponent } from '../../app-timetable/app-timetable.component';

@Component({
  selector: 'hinv-hostels',
  templateUrl: './hostels.component.html',
  styleUrl: './hostels.component.scss',
})
export class HostelsComponent implements OnInit {
  constructor(private vcr: ViewContainerRef) {}
  ngOnInit(): void {}
}
