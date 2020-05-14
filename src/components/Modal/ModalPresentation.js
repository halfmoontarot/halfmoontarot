import React from 'react'
import Button from '../Button/Button'
import Text from '../Text/Text'

export default function ModalPresentation ({styles, modalContent, titleModal, onClick}) {
  return (
    <div className={styles.root}>
      <div className={styles.header}><Text variant={"body"}>{titleModal}</Text><Button onClick={onClick}>X</Button></div>
      <div className={styles.body}>{modalContent}</div>
    </div>
  )
}