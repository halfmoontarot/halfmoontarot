import React from 'react'
import Text from '../Text/Text'
import { ReactComponent as PageBreak } from '../../static/images/HalfMoonLogo_vfinal.svg'
import styles from './Page.module.css'
import imageHome from '../../static/images/halfMoonTarot_cards_1.jpg'
import imageReading from '../../static/images/halfMoonTarot_cards_2.jpg'
import imageContact from '../../static/images/halfMoonTarot_cards_4.jpg'

export default function ({pageType, children}) {
  if (pageType === "isPhilosophy") {
    return (<React.Fragment><Text variant='body'>{children}</Text><img className={styles.image} src={imageHome} alt="Tarot cards" /></React.Fragment>)
  } else if (pageType === "isReadings") {
    return (<React.Fragment><Text variant='body'>{children}</Text><img className={styles.image} src={imageReading} alt="Tarot cards" /></React.Fragment>)
  } else if (pageType === "isSessions") {
    return (
      <React.Fragment>
        <div><Text variant='body'>{children.text_session}</Text></div>
        <div className={styles.pageBreak}>
          <PageBreak title={"page break"} width={"30"} height={"30"}></PageBreak>
        </div>
        <div><Text variant='body'>{children.text_confidentiality}</Text></div>
      </React.Fragment>
    )
  } else if (pageType === "isContact") {
    return (
      <React.Fragment>
        <div><Text variant='body'>{children}</Text></div>
        <div className={styles.email}><a href="mailto: hello@halfmoontarot.com"><Text variant='body'>Message Lo</Text></a></div>
        <img className={styles.image} src={imageContact} alt="Tarot cards" />
      </React.Fragment>
    )
  }
}