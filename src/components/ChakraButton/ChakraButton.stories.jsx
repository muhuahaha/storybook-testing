import React from 'react';
import { Button } from '@chakra-ui/react';
import { action, actions } from '@storybook/addon-actions';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => (
  <Button {...actions('onClick', 'onMouseOver')} {...args} />
);

export const Success = Template.bind({});
Success.args = {
  colorScheme: 'green',
  children: 'Success',
  variant: 'outline',
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
};

export const Log = () => (
  <Button colorScheme="green" onClick={() => console.log('Button clicked')}>
    Log
  </Button>
);
