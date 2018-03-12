import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/styled-components/Button';

storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>Hello Button2</Button>
  )
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😃😇🤣😁</Button>
  )
  .add('primary', () =>
    <Button primary>Primary Button</Button>
  );
