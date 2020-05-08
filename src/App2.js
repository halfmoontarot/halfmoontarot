import React, {useState, useCallback} from 'react';
import './App.css';
import ButtonCta from './components/ButtonCta/ButtonCta';
function behavior ({onMouseEnter}) {
     // if i don't use hooks, every time I rerender my Button, I recreate all the functions
  // can use useEffect to know when something has changed, and log it - see previous value / current value
  // debugger for react in browser when rendering
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  // look at useCallback: even if rerender the component, same handler function reused if nothing has changed in dependencies


  function handleOnMouseEnter() {
    setIsHovered(true)
    onMouseEnter() // this allows me to compose 
  }

  const handleOnMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  function handleOnMouseDown() {
    setIsClicked(true)
  }
  function handleOnMouseUp() {
    setIsClicked(false)
  }

  return isHovered, isClicked, handleOnMouseEnter, handleOnMouseLeave, ..
}

function hook2({isEnabled}) {
  
  // makes something blink
  
}

function Button({onMouseEnter, onMouseLeave}) {
  const {isHovered, isClicked, handleOnMouseEnter, handleOnMouseLeave} = behavior({onMouseEnter})
  const {} = hook2({isEnabled: isHovered}) 

  return (
    <div className="App">
      <header className="App-header">
        <ButtonCta 
          onMouseEnter={handleOnMouseEnter} // works with ...props
          handleOnMouseLeave={handleOnMouseLeave}
          handleOnMouseDown={handleOnMouseDown}
          handleOnMouseUp={handleOnMouseUp}
          isHovered={isHovered}
          isClicked={isClicked}> Hello
        </ButtonCta>
      </header>
    </div>
  );
}

export default App;
