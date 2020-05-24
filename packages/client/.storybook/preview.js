import { addParameters, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

const customViewports = {
  ultra: {
    name: 'Desktop HD',
    styles: {
      width: '3200px',
      height: '1800px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1600px',
      height: '900px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  phone: {
    name: 'Phone',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
};

addParameters({
  viewport: { viewports: customViewports },
});

addDecorator(withKnobs);
