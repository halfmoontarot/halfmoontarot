import React from 'react'

import styles from './Text.module.css'

export default function Text({children, variant}) {

  const htmlMarker = {
    body: 'p',
    title: 'h1',
    callToAction: 'h2',
    nav: 'h3',
  }

  const variantStyle = {
    body: styles.body,
    title: styles.title,
    callToAction: styles.callToAction,
    nav: styles.nav,
  }

  return variant ? React.createElement(htmlMarker[variant], {className: variantStyle[variant]}, children) : null;
}