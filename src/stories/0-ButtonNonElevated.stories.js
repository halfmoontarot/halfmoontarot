import React from 'react';
import Button from '../components/Button/Button';

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => <Button>Call to Action</Button>;

export const Hovered = () => <Button isHovered>Call to Action</Button>;

export const Pressed = () => <Button isPressed>Call to Action</Button>;

export const Focused = () => <Button isFocused>Call to Action</Button>;