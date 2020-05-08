import React from 'react';
import Text from '../components/Text/Text';

export default {
  component: Text,
  title: 'Text',
};

export const Body = () => <Text variant='body'>Some text, yay</Text>;
export const Title = () => <Text variant="title">Some text, yay</Text>;
export const Nav = () => <Text variant="nav">Some text, yay</Text>;
export const CallToAction = () => <Text variant="callToAction">Some text, yay</Text>;