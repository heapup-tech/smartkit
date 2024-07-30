import { default as enUS } from './locales/en-US'
import { default as zhCN } from './locales/zh-CN'

export type Languages = 'en-US' | 'zh-CN'

export const getLocale = (lang: Languages) => {
  switch (lang) {
    case 'zh-CN':
      return zhCN
    default:
      return enUS
  }
}
