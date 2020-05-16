import React, {useState, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch  } from "react-router-dom";
import './static/css/cssreset.css'
import './static/css/variables.css'
import './static/css/fonts.css'
import styles from './App.module.css';
import Button from './components/Button/Button';
import Text from './components/Text/Text'
import Navbar from './components/Navbar/Navbar'
import Page from './components/Page'
import data from './static/data.json'
import { ReactComponent as Logo } from './static/images/HalfMoonLogo_vfinal.svg'
import { ReactComponent as MenuIcon } from './static/images/menu_blue_vfinal.svg'

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
    title: "Contact",
    url: "/contact",
  },
]

const throttle = (func, delay) => {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    func(...args);
    setTimeout(() => {
      inProgress = false;
    }, delay);
  }
}

export default function App() {
  const [currentView, setCurrentView ] = useState('/')
  useEffect(() => {
    // render page is sufficient to navigate within the app, but this hook is necessary when user directly pastes url in browser
    const location = window.location.hash.split('#')
    setCurrentView(location[1])
  }, [window.location.hash])

  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsOpened(false);
    }, 1000);
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onClickCallToAction() {
    window.open("https://halfmoontarotreadings.simplybook.it/v2/#book/count/1/provider/1");
  }

  function onClickNavLinks(pageUrl) {
    window.location.hash = pageUrl; // updates the url
    setCurrentView(pageUrl)
    setIsOpened(false)
  }

  function onClickLogo() {
    window.location.hash = "/"; // updates the url
    setCurrentView("/")
  }

  function onClickMenu() {
    setIsOpened(true)
  }

  let renderPage = {
    "/" : <Page pageType={"isPhilosophy"}>{data.philosophy}</Page>,
    "/philosophy" : <Page pageType={"isPhilosophy"}>{data.philosophy}</Page>,
    "/readings": <Page pageType={"isReadings"}>{data.readings}</Page>,
    "/sessions": <Page pageType={"isSessions"}>{data.sessions}</Page>,
    "/contact": <Page pageType={"isContact"}>{data.contact}</Page>,
  }

  return (
    <HashRouter>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logoSmall}>
            {/* <Logo title={"Half Moon Tarot Logo"} width={"65"} height={"65"}></Logo> */}
            <Button onClick={onClickLogo} isIcon><Logo width={"65"} height={"65"}></Logo></Button>
          </div>
          <div className={styles.menuIcon}>
            <Button onClick={onClickMenu} isIcon><MenuIcon width={"65"} height={"65"}></MenuIcon></Button>
          </div>
        </div>
        <div className={styles.logoLarge}>
          <Logo title={"Half Moon Tarot Logo"} width={"150"} height={"150"}></Logo>
        </div>
        <div className={styles.title}>
          <Text variant='title'>Half Moon <br/> Tarot</Text>
        </div>
        <div className={styles.callToAction}>
          <Button onClick={onClickCallToAction}><Text variant='callToAction'>Book a Reading</Text></Button>
        </div>
        <Navbar isOpened={isOpened} pages={pagesData} onClick={onClickNavLinks}></Navbar>
        <div className={styles.body}>
          {renderPage[currentView]}
        </div>
      </div>
    </HashRouter>
  )
}

//<Text variant='body'>{data.philosophy}</Text>

//////////////////////
// Create an iframe:
// If the iframe isn't wrapped in a specific height, it cuts after 100px-ish
// But the iframe goes over divs placed above.
{/* <div style={{height: "100vh"}}>
  <iframe 
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    }}
    src="https://halfmoontarotreadings.simplybook.it/v2/#book/count/1/provider/1" frameborder="0">
  </iframe>
</div> */}



//////////////////////
// This works to link acuity via a button:

// const useScript = url => {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = url;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     }
//   }, [url]);
// };

//   useScript("https://embed.acuityscheduling.com/embed/button/19578330.js")
{/* <a href="https://app.acuityscheduling.com/schedule.php?owner=19578330" target="_blank" class="acuity-embed-button" 
style={{
  padding: "10px 30px",
  border: "solid #1117A1 3px",
  backgroundColor:  "white",
  boxShadow: "5px 5px 0px -1px #1117A1",
  color: "black",
  }}
>Schedule Appointment</a>
<link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/19578330.css" id="acuity-button-styles" /> */}