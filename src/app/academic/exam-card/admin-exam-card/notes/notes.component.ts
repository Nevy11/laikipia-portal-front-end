import { Component } from '@angular/core';
import { ExamCardService } from '../../exam-card.service';

@Component({
  selector: 'hinv-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  examCardNotes = this.examService.examCardNotes;
  constructor(private examService: ExamCardService) {}
}
