import { Component, Input } from '@angular/core';
import { Badge } from '../badge/badge.interface';
import { EmojiPick } from '../emoji-picker/emoji-picker.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // TODO replace this with a placeholder img
  @Input() emojis: EmojiPick[];
  @Input() avatarSrc = './assets/logo.png';
  @Input() title = '';
  @Input() description = '';
  @Input() badges: Badge[];

  constructor() {}
}
