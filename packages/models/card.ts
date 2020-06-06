import { EmojiPick } from './emoji-pick';
import { Badge } from './badge';

export interface Card {
  emojis: EmojiPick[];
  avatarSrc: string;
  title: string;
  description: string;
  badges: Badge[];
}
