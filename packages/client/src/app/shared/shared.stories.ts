import { storiesOf, moduleMetadata } from '@storybook/angular';
import { object, text, select, boolean } from '@storybook/addon-knobs';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './layout/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared.module';
import { BadgeComponent } from './badge/badge.component';
import { HeaderComponent } from './layout/header.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
import { BadgeBackgroundColor, BadgeTextColor } from '@gbc/models/badge';
import mockBadge from '@gbc/server-test/mockups/badge';
import mockEmojiPicks from '@gbc/server-test/mockups/emoji-pick';
import mockHeaderNavItems from '@gbc/server-test/mockups/header';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IconSearchComponent } from './icon-search/icon-search.component';

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
