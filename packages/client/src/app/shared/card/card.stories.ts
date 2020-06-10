import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../shared.module';
import { CardService } from '../../core/services/card.service';
import { TestCardService } from '../../core/services/card.service.test';
import { CardComponent } from './card.component';
import { CardListComponent } from './card-list.component';
import { CardSearchComponent } from './card-search.component';
import { object, text } from '@storybook/addon-knobs';
import mockCard from '@gbc/server-test/mockups/card';

const card = storiesOf('Card', module).addDecorator(
  moduleMetadata({
    imports: [SharedModule],
    providers: [{ provide: CardService, useExisting: TestCardService }],
  }),
);

card.add('Card', () => {
  return {
    component: CardComponent,
    props: {
      emojis: object('emojis', mockCard[0].emojis),
      avatarSrc: text('avatarSrc', mockCard[0].avatarSrc),
      title: text('title', mockCard[0].title),
      description: text('description', mockCard[0].description),
      badges: object('badges', mockCard[0].badges),
    },
  };
});

card.add('Card List', () => {
  return {
    component: CardListComponent,
  };
});

card.add('Card Search', () => {
  return {
    component: CardSearchComponent,
  };
});
