import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SocialsService } from '../../socials.service';
import { events } from '../../socials';

@Component({
  selector: 'hinv-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  socialService = inject(SocialsService);
  events: events[] = this.socialService.events;
}
