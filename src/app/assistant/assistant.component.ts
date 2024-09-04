import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SmallContainerComponent } from './small-container/small-container.component';

@Component({
  selector: 'hinv-assistant',
  templateUrl: './assistant.component.html',
  styleUrl: './assistant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantComponent {
  @ViewChild('question', { read: ViewContainerRef })
  question!: ViewContainerRef;
  @ViewChild('answer', { read: true }) answer!: ViewContainerRef;
  @ViewChild(SmallContainerComponent) small_container!: SmallContainerComponent;
  @ViewChild(SmallContainerComponent) smallContainer!: SmallContainerComponent;
  @ViewChild('scrollable-content') scrollableContent!: ElementRef;
  question_input!: string;
  vcr = inject(ViewContainerRef);
  click(form: NgForm) {
    console.log('Form submitted:', form.value);
    const value = form.value['question_input'];
    console.log(value);

    this.question.createComponent(SmallContainerComponent);
    form.reset();
  }
}
