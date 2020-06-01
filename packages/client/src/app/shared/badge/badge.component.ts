import { Component, Input } from '@angular/core';
import { BadgeBackgroundColor, BadgeTextColor } from './badge.interface';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() backgroundColor = BadgeBackgroundColor.BLUE;
  @Input() borderColor = BadgeBackgroundColor.BLUE;
  @Input() isBorderDashed = true;
  @Input() textColor = BadgeTextColor.WHITE;

  constructor() {}
}
