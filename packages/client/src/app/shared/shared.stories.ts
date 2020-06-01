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
