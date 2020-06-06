import { Component, Input } from '@angular/core';
import { Card } from '@gbc/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() emojis: Card['emojis'] = [];
  @Input() badges: Card['badges'] = [];
  @Input() avatarSrc: Card['avatarSrc'] = './assets/logo.png';
  @Input() title: Card['title'] = '';
  @Input() description: Card['description'] = '';

  // Use either this setter or the inputs above
  @Input() set config(val: Card) {
    this.title = val.title;
    this.description = val.description;
    this.avatarSrc = val.avatarSrc;
    this.badges = val.badges;
    this.emojis = val.emojis;
  }

  constructor() {}
}
