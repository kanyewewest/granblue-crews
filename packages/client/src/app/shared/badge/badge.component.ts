import { Component, Input } from '@angular/core';
import { BadgeBackgroundColor, BadgeTextColor, Badge } from '@gbc/models/badge';

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
  @Input() textColor = BadgeTextColor.WHITE;
  @Input() isBorderDashed = false;

  // Use either this setter or the inputs above
  @Input() set badge(val: Badge) {
    this.name = val.name;
    this.description = val.description;
    this.backgroundColor = val.backgroundColor;
    this.borderColor = val.borderColor;
    this.textColor = val.textColor;
    this.isBorderDashed = val.isBorderDashed;
  }

  constructor() {}
}
