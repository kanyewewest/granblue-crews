import { storiesOf, moduleMetadata } from '@storybook/angular';
import { object, text, select, boolean } from '@storybook/addon-knobs';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared.module';
import { BadgeComponent } from './badge/badge.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';

import { BadgeBackgroundColor, BadgeTextColor } from '@gbc/models/badge';

import mockBadge from '@gbc/server-test/mockups/badge';
import mockCard from '@gbc/server-test/mockups/card';
import mockEmojiPicks from '@gbc/server-test/mockups/emoji-pick';
import mockHeaderNavItems from '@gbc/server-test/mockups/header';

const shared = storiesOf('Shared', module).addDecorator(
  moduleMetadata({
    imports: [RouterTestingModule, SharedModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  }),
);

shared.add('Header', () => {
  return {
    component: HeaderComponent,
    props: {
      navItems: object('navItems', mockHeaderNavItems),
    },
  };
});

shared.add('Footer', () => {
  return {
    component: FooterComponent,
  };
});

shared.add('Layout', () => {
  return {
    component: LayoutComponent,
  };
});

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

shared.add('Card', () => {
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

shared.add('Emoji Picker', () => {
  return {
    component: EmojiPickerComponent,
    props: {
      emojis: object('emojis', mockEmojiPicks),
    },
  };
});
