import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'


function UseLanguagesState(initialData) {
  const [languages, setLanguages] = useState(initialData)
  const [cookies, setCookie] = useCookies(['current_language_id', 'current_dialect_id'])

  // eslint-disable-next-line
  useEffect(setLanguageAndDialectByCookies, [])

  function getCurrentLanguage() {
    return languages.find(language => language.selected)
  }

  function getCurrentDialect() {
    const language = languages.find(language => language.selected)
    return language.dialects.find(dialect => dialect.selected)
  }

  function getDialects() {
    const language = languages.find(language => language.selected)
    return language.dialects
  }

  function setCurrentLanguage(id) {
    setLanguages(languages.map(language => {
      language.selected = language.id === id
      language.dialects.map((dialect, index) => {
        dialect.selected = language.id === id && index === 0
        return dialect
      })
        
      return language
    }))
    
    setCookie('current_language_id', id, { path: '/', maxAge: 365 * 86400 * 10 })
  }

  function setCurrentDialect(id) {
    setLanguages(languages.map(language => {
      language.dialects.map(dialect => {
        dialect.selected = dialect.id === id ? true : false
        return dialect
      })

      return language
    }))

    setCookie('current_dialect_id', id, { path: '/', maxAge: 365 * 86400 * 10 })
  }

  function setLanguageAndDialectByCookies () {
    const languageIdFromCookies = parseInt(cookies.current_language_id)
    const dialectIdFromCookies = parseInt(cookies.current_dialect_id)
    const currentLanguage = getCurrentLanguage()
    const currentDialect = getCurrentDialect()
  
    if (languageIdFromCookies && languageIdFromCookies !== currentLanguage.id) {
      setCurrentLanguage(languageIdFromCookies)
    }
  
    if (dialectIdFromCookies && dialectIdFromCookies !== currentDialect.id && getDialects().find(dialect => dialect.id === dialectIdFromCookies)) {
      setCurrentDialect(dialectIdFromCookies)
    }
  }

  return [
    languages,
    {
      getCurrentLanguage,
      getCurrentDialect,
      getDialects,
      setCurrentLanguage,
      setCurrentDialect
    }
  ]
}

export default UseLanguagesState