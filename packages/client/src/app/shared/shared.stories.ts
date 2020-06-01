import { storiesOf, moduleMetadata } from '@storybook/angular';
import { object } from '@storybook/addon-knobs';
import { HeaderComponent } from './header/header.component';
import { mockHeaderNavItems } from './header/header.interface';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer/footer.component';

const shared = storiesOf('Shared', module).addDecorator(
  moduleMetadata({
    imports: [RouterTestingModule],
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
