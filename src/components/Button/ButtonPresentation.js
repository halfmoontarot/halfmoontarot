import React from 'react'
import styles from './ButtonPresentation.module.css'

export default function ButtonPresentation({children, isHovered, isPressed, isFocused, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter}) {
  return(
    <button 
      className={`${styles.base} 
      ${!isHovered && !isPressed ? styles.default : ''} 
      ${isHovered ? styles.hovered : ''} 
      ${isPressed ? styles.clicked : ''} 
      ${isFocused ? styles.focused : ''}
      `}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      >{children}
    </button>
  )
}

// Faster coding: 
// Could replace arguments onMouseDown, onMouseUp, onMouseLeave, onMouseEnter by ...props
// and in return (), replace 
// onMouseDown={onMouseDown}
// onMouseUp={onMouseUp}
// onMouseLeave={onMouseLeave}
// onMouseEnter={onMouseEnter}
// by {...props}