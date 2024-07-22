import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'hinv-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrl: './drag-ndrop.component.scss',
})
export class DragNdropComponent {
  todo = [
    'learn Rust',
    'Understand sass',
    'Preprocess The data',
    'Add equity apis',
    'Add settings',
  ];

  done = [
    'Make the front-end',
    'Improved the socials part',
    'Improved home page',
    'Check e-mail',
    'Take a walk',
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
