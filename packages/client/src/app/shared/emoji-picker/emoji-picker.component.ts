import { Component, Input } from '@angular/core';
import { EmojiPick } from '@gbc/models/emoji-pick';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss'],
})
export class EmojiPickerComponent {
  @Input() emojis: EmojiPick[];
  constructor() {}

  voteEmoji(index: number) {
    this.emojis[index].isAlreadyVoted
      ? --this.emojis[index].votes
      : ++this.emojis[index].votes;

    this.emojis[index].isAlreadyVoted = !this.emojis[index].isAlreadyVoted;

    // Sort in descending order
    this.emojis.sort((x, y) => y.votes - x.votes);

    // TODO update to backend
  }
}
