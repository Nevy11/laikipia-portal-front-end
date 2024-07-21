import { Component } from '@angular/core';

@Component({
  selector: 'hinv-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  examCardNotes = [
    'This card must be presented to the invigilators at each examination.',
    'The name appearing on this card is the name that will appear on your certifcate upon graduation.Report any anomalies or errors to the Registrar.',
    'Your registration number and not your name must appear on every answer book or supplementary sheet.',
  ];
}
