import { ThemeVars } from '../themeVars'

export const light: ThemeVars = {
  colors: {
    accent: '#4CA3FF',
    foreground: '#373737',
    muted: '#999999',
    connectButton: '#373737',
    iconButton: '#373737',
    balance: '#373737',
    destructive: '#EF4544'
  },
  backgrounds: {
    overlay: 'rgba(71, 88, 107, 0.24)',
    connectModal: '#ffffff'
  },
  clickable: {
    background: {
      normal: '#F6F7F9',
      hover: '#F0F2F5',
      active: '#EAECF1'
    }
  },
  width: {
    connectModal: '360px'
  },
  height: {
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
