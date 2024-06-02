import { detect } from 'detect-browser'

const detectOS = () => {
  const browser = detect()
  return browser?.os ?? ''
}

export const isIOS = () => {
  const os = detectOS()
  return os.toLowerCase().includes('ios')
}
export const isAndroid = () => {
  const os = detectOS()
  return os.toLowerCase().includes('android')
}
export const isMobile = () => {
  return isAndroid() || isIOS()
}
