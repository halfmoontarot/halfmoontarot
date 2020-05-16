import React from 'react'
import NavbarPresentation from './NavbarPresentation'
import styles from './Navbar.module.css'

export default function Navbar ({pages, onClick, isOpened, ...props}) {
  return (
    <NavbarPresentation isOpened={isOpened} styles={styles} pages={pages} onClick={onClick}></NavbarPresentation>
  )
}