import { storiesOf, moduleMetadata } from '@storybook/angular';
import { object, text, select, boolean } from '@storybook/addon-knobs';
import { SharedModule } from './shared.module';
import { BadgeComponent } from './badge/badge.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
import { BadgeBackgroundColor, BadgeTextColor } from '@gbc/models/badge';
import mockBadge from '@gbc/server-test/mockups/badge';
import mockEmojiPicks from '@gbc/server-test/mockups/emoji-pick';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IconSearchComponent } from './icon-search/icon-search.component';

const shared = storiesOf('Shared', module).addDecorator(
  moduleMetadata({
    imports: [SharedModule],
  }),
);

shared.add('Badge', () => {
  return {
    component: BadgeComponent,
    props: {
      name: text('name', mockBadge[0].name),
      description: text('description', mockBadge[0].description),
      backgroundColor: select(
        'backgroundColor',
        Object.values(BadgeBackgroundColor),
        mockBadge[0].backgroundColor,
      ),
      borderColor: select(
        'borderColor',
        Object.values(BadgeBackgroundColor),
        mockBadge[0].borderColor,
      ),
      textColor: select(
        'textColor',
        Object.values(BadgeTextColor),
        mockBadge[0].textColor,
      ),
      isBorderDashed: boolean('isBorderDashed', mockBadge[0].isBorderDashed),
    },
  };
});

shared.add('Emoji Picker', () => {
  return {
    component: EmojiPickerComponent,
    props: {
      emojis: object('emojis', mockEmojiPicks),
    },
  };
});

shared.add('Icon Search', () => {
  return {
    component: IconSearchComponent,
  };
});

shared.add('Searchbar', () => {
  return {
    component: SearchbarComponent,
  };
});
