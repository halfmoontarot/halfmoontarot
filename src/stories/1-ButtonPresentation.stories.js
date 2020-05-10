import React from 'react';
import ButtonPresentation from '../components/Button/ButtonPresentation';
import styles from '../components/Button/ButtonPresentation.module.css'

export default {
  component: ButtonPresentation,
  title: 'Button Presentation',
};

export const Default = () => <ButtonPresentation styles={styles}>Call to Action</ButtonPresentation>;

export const Hovered = () => <ButtonPresentation isHovered  styles={styles}>Call to Action</ButtonPresentation>;

export const Pressed = () => <ButtonPresentation isPressed  styles={styles}>Call to Action</ButtonPresentation>;

export const Focused = () => <ButtonPresentation isFocused  styles={styles}>Call to Action</ButtonPresentation>;