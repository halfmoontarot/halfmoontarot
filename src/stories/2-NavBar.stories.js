import React from 'react';
import Navbar from '../components/Navbar/Navbar';

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

export const Default = () => <Navbar pages={pagesData}></Navbar>;