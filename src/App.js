import React, {useState, useCallback} from 'react';
import './static/css/cssreset.css'
import './static/css/fonts.css'
import styles from './App.module.css';
import Button from './components/Button/Button';
import Text from './components/Text/Text'
import NavLink from './components/NavLink/NavLink'
import data from './static/data.json'

export default function App() {
  function onClick() {
    console.log("clicked")
  }

  return (
    <div className={styles.container}>
      <Text variant='title'>Half Moon Tarot</Text>
      <Button onClick={onClick}><Text variant='callToAction'>Book a Reading</Text></Button>
      <NavLink><Text variant='nav'>Philosophy</Text></NavLink>
      <Text variant='body'>{data.philosophy}></Text>
    </div>
  )
}