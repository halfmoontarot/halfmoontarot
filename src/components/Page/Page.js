import React from 'react'
import Text from '../Text/Text'
import { ReactComponent as PageBreak } from '../../static/images/HalfMoonLogo_vfinal.svg'
import styles from './Page.module.css'

export default function ({pageType, children}) {
  if ((pageType === "isPhilosophy") || (pageType === "isReadings")) {
    return (<Text variant='body'>{children}</Text>)
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
        <div className={styles.email}><a href="mailto: lo@notsetupyet.com"><Text variant='body'>Message Lo</Text></a></div>
      </React.Fragment>
    )
  }
}