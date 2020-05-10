import React from 'react'

// We started with one Button component, and separated its behaviour from its presentation in case a 
// component with a different html presentation needed the same behaviour. 
// Now, what if another component with a similar html presentation needed a different css styling?
// So we're now pushing the stylesheet up and passing it to the ButtonPresentation, so that it can be
// changed. Now the <Button> is going to simply call the behaviour, call the presentation, and call the 
// styling and combine them.

export default function ButtonPresentation({children, isCurrent, isHovered, isPressed, isFocused, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter, styles}) {
  return(
    <button 
      className={`${styles.base} 
      ${!isHovered && !isPressed ? styles.default : ''} 
      ${isHovered ? styles.hovered : ''} 
      ${isPressed ? styles.clicked : ''} 
      ${isFocused ? styles.focused : ''}
      ${isCurrent ? styles.current : ''}
      `}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      >{children}
      <div className={`${styles.rectangleBase} 
        ${!isHovered && !isPressed ? styles.rectangleDefault : ''} 
        ${isHovered ? styles.rectangleHovered : ''} 
        ${isPressed ? styles.rectangleClicked : ''} 
        ${isFocused ? styles.rectangleFocused : ''}
        ${isCurrent ? styles.rectangleCurrent : ''}
      `}></div>
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