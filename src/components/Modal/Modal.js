import React from 'react'
import ModalPresentation from './ModalPresentation'
import styles from './ModalPresentation.module.css'

export default function Modal({onClick, titleModal, modalContent}) {
  return (
    <ModalPresentation styles={styles} titleModal={titleModal} modalContent={modalContent} onClick={onClick}></ModalPresentation>
  )
}