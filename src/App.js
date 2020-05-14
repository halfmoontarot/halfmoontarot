import React, {useState, useCallback, useEffect} from 'react';
import { HashRouter, Link, Route, Switch  } from "react-router-dom";
import './static/css/cssreset.css'
import './static/css/fonts.css'
import styles from './App.module.css';
import Button from './components/Button/Button';
import Text from './components/Text/Text'
import Navbar from './components/Navbar/Navbar'
import data from './static/data.json'

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
    title: "Confidentiality",
    url: "/confidentiality",
  },
  { 
    title: "Contact",
    url: "/contact",
  },
]

export default function App() {
  function onClickCallToAction() {
    window.open("https://halfmoontarotreadings.simplybook.it/v2/#book/count/1/provider/1");
  }

  function onClickNavLinks(pageUrl) {
    console.log("pageUrl", pageUrl)
  }

  return (
    <HashRouter>
      <div className={styles.container}>
        <div className={styles.title}>
          <Text variant='title'>Half Moon <br/> Tarot</Text>
        </div>
        <div className={styles.callToAction}>
          <Button onClick={onClickCallToAction}><Text variant='callToAction'>Book a Reading</Text></Button>
        </div>
        <div className={styles.navbar}>
          <Navbar pages={pagesData} onClick={onClickNavLinks}></Navbar>
        </div>
        <div className={styles.body}>
        <Switch>
          <Route exact path={["/", "/philosophy"]} c>
            <Text variant='body'>{data.philosophy}</Text>
          </Route>
          <Route path="/readings">
            <Text variant='body'>{data.readings}</Text>
          </Route>
          <Route path="/sessions">
            <Text variant='body'>{data.sessions}</Text>
          </Route>
          <Route path="/confidentiality">
            <Text variant='body'>{data.confidentiality}</Text>
          </Route>
          <Route path="/contact">
            <Text variant='body'>{data.contact}</Text>
          </Route>
        </Switch>
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