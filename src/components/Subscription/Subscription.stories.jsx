import React from 'react';
import { Danger } from '../Button/Button.stories';
import { Small } from '../Input/Input.stories';

export default {
  title: 'Form/Subscription',
};

export const PrimarySubscription = () => (
  <>
    <Small />
    <Danger />
  </>
);
