import { Component } from '@angular/core';

@Component({
  selector: 'hinv-academic',
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss',
})
export class AcademicComponent {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
