import React, {useState, useCallback} from 'react';
import './static/css/cssreset.css'
import './static/css/fonts.css'
import styles from './App.module.css';
import Button from './components/Button/Button';
import Text from './components/Text/Text'
import Navbar from './components/Navbar/Navbar'
import data from './static/data.json'

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

export default function App() {
  function onClick() {
    console.log("clicked")
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text variant='title'>Half Moon <br/> Tarot</Text>
      </div>
      <div className={styles.callToAction}>
        <Button onClick={onClick}><Text variant='callToAction'>Book a Reading</Text></Button>
      </div>
      <div className={styles.navbar}>
        <Navbar pages={pagesData}></Navbar>
      </div>
      <div className={styles.body}>
        <Text variant='body'>{data.philosophy}</Text>
      </div>
    </div>
  )
}