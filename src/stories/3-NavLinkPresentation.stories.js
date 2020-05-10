import React from 'react';
import NavLinkPresentation from '../components/NavLink/NavLinkPresentation';
import styles from '../components/NavLink/NavLinkPresentation.module.css'

export default {
  component: NavLinkPresentation,
  title: 'Navlink Presentation',
};

export const Default = () => <NavLinkPresentation styles={styles}>Call to Action</NavLinkPresentation>;

export const Current = () => <NavLinkPresentation isCurrent styles={styles}>Call to Action</NavLinkPresentation>;

export const Hovered = () => <NavLinkPresentation isHovered  styles={styles}>Call to Action</NavLinkPresentation>;

export const Pressed = () => <NavLinkPresentation isPressed  styles={styles}>Call to Action</NavLinkPresentation>;

export const Focused = () => <NavLinkPresentation isFocused  styles={styles}>Call to Action</NavLinkPresentation>;