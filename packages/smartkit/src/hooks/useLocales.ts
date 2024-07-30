import { getLocale } from './../localizations'
import { useSmartKitContext } from '../components/SmartKitProvider'
import { useMemo } from 'react'

export default function useLocales() {
  const context = useSmartKitContext()
  const language = context.language ?? 'en-US'

  const translations = useMemo(() => {
    return getLocale(language)
  }, [language])

  return translations
}
