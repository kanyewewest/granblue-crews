import { Card } from '@gbc/models/card';
import badges from './badge';
import emojis from './emoji-pick';

const mock: Card[] = [
  {
    emojis: emojis,
    avatarSrc: 'https://placekitten.com/200/200',
    title: 'Just a card',
    description: 'Cardigan cardex card...',
    badges: badges,
  },
  {
    emojis: emojis,
    avatarSrc: 'https://placekitten.com/200/200',
    title: 'Another card is here',
    description:
      'Cillum id do aliquip reprehenderit aute dolore mollit ut consequat amet. Occaecat deserunt duis quis reprehenderit sit officia anim sunt minim. Cupidatat fugiat veniam commodo amet voluptate id amet.',
    badges: badges,
  },
  {
    emojis: emojis,
    avatarSrc: 'https://placekitten.com/200/200',
    title: 'Ive been eating good',
    description:
      'Magna officia nulla aute anim dolor. Ullamco eu laboris exercitation eiusmod exercitation est exercitation. Incididunt mollit ad excepteur qui elit do consequat tempor veniam ullamco ipsum consectetur ullamco do. Enim sunt ea adipisicing id nisi ullamco id. Non occaecat ad in aliquip ex officia consequat aute commodo cillum consectetur. Eiusmod do quis est eu cillum dolore aute consectetur enim proident velit ex.',
    badges: badges,
  },
];

export default mock;
