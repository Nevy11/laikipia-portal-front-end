import { Component, Input } from '@angular/core';

@Component({
  selector: 'hinv-small-container',
  templateUrl: './small-container.component.html',
  styleUrl: './small-container.component.scss',
})
export class SmallContainerComponent {
  data: string = 'Who is Steve?';
}
