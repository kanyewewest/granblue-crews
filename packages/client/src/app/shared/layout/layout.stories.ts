import { storiesOf, moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { object } from '@storybook/addon-knobs';
import { SharedModule } from '../shared.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import mockHeaderNavItems from '@gbc/server-test/mockups/header';

const layout = storiesOf('Layout', module).addDecorator(
  moduleMetadata({
    imports: [RouterTestingModule, SharedModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  }),
);

layout.add('Header', () => {
  return {
    component: HeaderComponent,
    props: {
      navItems: object('navItems', mockHeaderNavItems),
    },
  };
});

layout.add('Footer', () => {
  return {
    component: FooterComponent,
  };
});

layout.add('Layout', () => {
  return {
    component: LayoutComponent,
  };
});
