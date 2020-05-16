import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { HashRouter } from 'react-router-dom';

export default {
  component: Navbar,
  title: 'Navbar',
};

const pagesData = [
  { 
    title: "Philosophy",
    url: "/philosophy",
  },
  { 
    title: "Readings",
    url: "/readings",
  },
  { 
    title: "Sessions",
    url: "/sessions",
  },
  { 
    title: "Confidentiality",
    url: "/confidentiality",
  },
  { 
    title: "Contact",
    url: "/contact",
  },
]

export const Default = () => <HashRouter><Navbar pages={pagesData}></Navbar></HashRouter>;

export const OpenedSmallScreen = () => <HashRouter><Navbar isOpened pages={pagesData}></Navbar></HashRouter>;