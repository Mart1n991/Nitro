import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const en = require('./locales/en/translation.json')
const sk = require('./locales/sk/translation.json')
const cs = require('./locales/cs/translation.json')

const deviceLanguage = (Intl?.DateTimeFormat().resolvedOptions().locale ?? 'en').split('-')[0]

const supportedLanguages = ['en', 'sk', 'cs']
const lng = supportedLanguages.includes(deviceLanguage) ? deviceLanguage : 'en'

i18n.use(initReactI18next).init({
  lng,
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    sk: { translation: sk },
    cs: { translation: cs },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
