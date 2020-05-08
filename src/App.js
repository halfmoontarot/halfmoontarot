import React, {useState, useCallback} from 'react';
import './static/css/cssreset.css'
import styles from './App.module.css';
import Button from './components/Button/Button';
import Text from './components/Text/Text'

export default function App() {
  function onClick() {
    console.log("clicked")
  }

  return (
    <div className={styles.container}>
      <Text variant='title'>Half Moon Tarot</Text>
      <Button onClick={onClick}><Text variant='callToAction'>Book a Reading</Text></Button>
      <Text variant='body'>Hello. I’m Lo. I practice what can be called “psychological” tarot. This means I see tarot as a tool to help you gain insights on your thoughts and situation, to find answers within yourself, and not as an artefact that gives you magical answers. 

I also believe that we should all be in charge of our own narrative. As such, while I will help you understand the meaning of the cards and how they might interact together, I will also invite you to share with me as little or as much as you like about what the cards may elicit in you, and let to your decision how much you’d like me to help you weave your story with the cards’ meanings.

We will go over all this in our first session, and any question you may have. You’re also welcome to email me if you have any question regarding the sessions or my practice.</Text>
    </div>
  )
}