import React, {useState} from 'react'
import styles from './ButtonPresentation.module.css'

// 0. Here, we have built a simple component Button.
// As a starting point, we have written the whole code in one file, within the same component.
// However, we quickly see the limitations of this approach, for 2 main reasons:
// a) Encapsulating all the functions within the components means that this component will always behave 
// exactly the same. So wherever I click on a button in the app, the same thing happens (in this case, 
// the styling changes.) In this app, we know that we want different things to happen when a user clicks on 
// a button; for example, sometimes we want a modal to appear, sometimes we want the user to be taken to a
// different page. To be able to change what happens depending on the purpose of the button, we need to
// elevate the function onMouseDown to a component above, from where we can give it different instructions.
// b) Encapsulating the functions in the component also means it is not possible to test those functions  
// and their impact (either visually with storybook or as part of unit testes), because those require to 
// receive these functions as props, and therefore all the functions need to be elevated.

export default function Button({children}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  function onMouseDown() {
    setIsPressed(true)
  }

  function onMouseUp() {
    setIsPressed(false)
  }

  function onMouseLeave() {
    setIsHovered(false)
  }

  function onMouseEnter() {
    setIsHovered(true)
  }

  function onFocus() {
    setIsFocused(true)
  }

  function onBlur() {
    setIsFocused(false)
  }

  return(
    <button 
      className={
        `${styles.base} 
        ${!isHovered && !isPressed ? styles.default : ''} 
        ${isHovered ? styles.hovered : ''} 
        ${isPressed ? styles.clicked : ''} 
        ${isFocused ? styles.focused : ''}
        `}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      >{children}
    </button>
  )
}