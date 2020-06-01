import { Badge, mockBadge } from '../badge/badge.interface';
import {
  mockEmojiPicks,
  EmojiPick,
} from '../emoji-picker/emoji-picker.interface';

export interface Card {
  emojis: EmojiPick[];
  avatarSrc: string;
  title: string;
  description: string;
  badges: Badge[];
}

export const mockCard: Card = {
  emojis: mockEmojiPicks,
  avatarSrc: 'https://placekitten.com/200/200',
  title: 'Just a card',
  description: 'Cardigan cardex card...',
  badges: [mockBadge, mockBadge, mockBadge],
};
