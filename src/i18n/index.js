import { createI18n } from 'vue-i18n'
import translate_en from './en'
import translate_km from './km'

const i18n = createI18n({
    locale: 'km', // set locale
    fallbackLocale: 'km', // set fallback locale
    messages: {
        en: translate_en,
        km: translate_km
    } // set locale messages
    // something vue-i18n options here ...
})

export default i18n