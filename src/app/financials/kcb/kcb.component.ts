import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KcbDialogueComponent } from './kcb-dialogue/kcb-dialogue.component';

@Component({
  selector: 'hinv-kcb',
  templateUrl: './kcb.component.html',
  styleUrl: './kcb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KcbComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  @Input() marginTop!: number;
  // @ViewChild('button') button!: ElementCSSInlineStyle;
  ngOnInit(): void {
    // this.button.style.marginTop = this.marginTop.toString();
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(KcbDialogueComponent, {
      width: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
