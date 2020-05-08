export default function comp(styles, ...args) {
  const stringifiedStyles = args.map(styleName => {
    return styles[styleName]
  })
  return stringifiedStyles.join(' ')
}