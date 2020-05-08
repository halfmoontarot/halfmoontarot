import React from 'react';
import ButtonPresentation from '../components/Button/ButtonPresentation';

export default {
  component: ButtonPresentation,
  title: 'Button Presentation',
};

export const Default = () => <ButtonPresentation>Call to Action</ButtonPresentation>;

export const Hovered = () => <ButtonPresentation isHovered>Call to Action</ButtonPresentation>;

export const Pressed = () => <ButtonPresentation isPressed>Call to Action</ButtonPresentation>;

export const Focused = () => <ButtonPresentation isFocused>Call to Action</ButtonPresentation>;