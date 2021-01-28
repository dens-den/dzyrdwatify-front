import React, { useContext } from 'react'
import LanguageContext from '../../contexts/Language'

function Footer () {
  const { languagesStateHelper } = useContext(LanguageContext)
  const language = languagesStateHelper.getCurrentLanguage()

  return (
    <footer className="container mx-auto px-4">
      <div className="flex justify-between items-center border-t border-gray-200 py-6 space-x-10">
        <div className="flex-1 space-x-10 text-sm font-medium text-gray-500">
          <span>
            Словоформ: { language.stats.wordForms }
          </span>  
          <span>
            Лексем: { language.stats.tokens }
          </span>  
          <span>
            Предложений: { language.stats.sentences }
          </span>
          <span>
            Текстов: { language.stats.texts }
          </span>
        </div>
        {/* <div className="flex space-x-4">
          123
        </div> */}
      </div>
    </footer>
  )
}

export default Footer