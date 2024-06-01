import { ThemeVars } from '../themeVars'

export const dark: ThemeVars = {
  colors: {
    accent: '#4CA3FF',
    foreground: '#ffffff',
    muted: '#FFFFFF66',
    connectButton: '#373737',
    iconButton: '#373737',
    balance: '#ffffff',
    destructive: '#EF4544'
  },
  backgrounds: {
    overlay: 'rgba(0,0,0,0.4)',
    connectModal: '#2B2B2B'
  },
  clickable: {
    background: {
      normal: '#383838',
      hover: '#404040',
      active: '#4D4D4D'
    }
  },
  width: {
    connectModal: '360px'
  },
  maxHeight: {
    connectModal: '446px'
  },
  radii: {
    connectButton: '10px',
    connectModal: '20px'
  },
  padding: {
    connectButton: {
      paddingInline: '12px',
      paddingBlock: '0'
    },
    connectModal: {
      paddingInline: '24px',
      paddingBlock: '24px'
    }
  }
}
