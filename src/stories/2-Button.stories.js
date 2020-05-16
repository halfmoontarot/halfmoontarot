import React from 'react';
import Button from '../components/Button/Button';
import { ReactComponent as Logo } from '../static/images/HalfMoonLogo_vfinal.svg'

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => <Button>Call to Action</Button>;

export const WithIcon = () => <Button icon={<Logo/>}>Call to Action</Button>;