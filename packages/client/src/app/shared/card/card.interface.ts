import { Badge, mockBadge } from '../badge/badge.interface';

export interface Card {
  avatarSrc: string;
  title: string;
  description: string;
  badges: Badge[];
}

export const mockCard: Card = {
  avatarSrc: 'https://placekitten.com/200/200',
  title: 'Just a card',
  description: 'Cardigan cardex card...',
  badges: [mockBadge, mockBadge, mockBadge],
};
