import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HostelsComponent } from '../hostels/hostels.component';
import { AppTimetableComponent } from '../../app-timetable/app-timetable.component';

@Component({
  selector: 'hinv-app-virtual-assistant',
  templateUrl: './app-virtual-assistant.component.html',
  styleUrl: './app-virtual-assistant.component.scss',
})
export class AppVirtualAssistantComponent implements OnInit {
  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    if (this.name.nativeElement) {
      this.name.nativeElement.innerText = 'HiltonHotel';
    }

    console.log('Stephen');
    console.log(this.name);
  }
}
