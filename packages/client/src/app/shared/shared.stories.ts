import { storiesOf, moduleMetadata } from '@storybook/angular';
import { object, text, select, boolean } from '@storybook/addon-knobs';
import { HeaderComponent } from './header/header.component';
import { mockHeaderNavItems } from './header/header.interface';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared.module';
import { BadgeComponent } from './badge/badge.component';
import {
  mockBadge,
  BadgeBackgroundColor,
  BadgeTextColor,
} from './badge/badge.interface';
import { CardComponent } from './card/card.component';
import { mockCard } from './card/card.interface';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
import { mockEmojiPicks } from './emoji-picker/emoji-picker.interface';

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
      name: text('name', mockBadge.name),
      description: text('description', mockBadge.description),
      backgroundColor: select(
        'backgroundColor',
        Object.values(BadgeBackgroundColor),
        mockBadge.backgroundColor,
      ),
      borderColor: select(
        'borderColor',
        Object.values(BadgeBackgroundColor),
        mockBadge.borderColor,
      ),
      textColor: select(
        'textColor',
        Object.values(BadgeTextColor),
        mockBadge.textColor,
      ),
      isBorderDashed: boolean('isBorderDashed', mockBadge.isBorderDashed),
    },
  };
});

shared.add('Card', () => {
  return {
    component: CardComponent,
    props: {
      emojis: object('emojis', mockCard.emojis),
      avatarSrc: text('avatarSrc', mockCard.avatarSrc),
      title: text('title', mockCard.title),
      description: text('description', mockCard.description),
      badges: object('badges', mockCard.badges),
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
