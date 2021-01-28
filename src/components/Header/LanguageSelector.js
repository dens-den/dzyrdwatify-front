import Dropdown from './Dropdown'
import React, { useState, useContext } from 'react'
import LanguageContext from '../../contexts/Language'

function LanguageSelector () {
  const { languages, languagesStateHelper } = useContext(LanguageContext)

  const [dropdowns, setDropdowns] = useState([
    { name: 'languages', isOpen: false },
    { name: 'dialects', isOpen: false }
  ])

  function getDropdownByName(name) {
    return dropdowns.find(dropdown => dropdown.name === name)
  }

  function setIsOpenDropdown(name, isOpen) {
    setDropdowns(dropdowns.map(dropdown => {
      dropdown.isOpen = dropdown.name === name ? isOpen : false
      return dropdown
    }))
  }

  return (
    <div className="space-x-4">
      <Dropdown
        dropdown={getDropdownByName('languages')}
        setIsOpenDropdown={setIsOpenDropdown}
        onChange={languagesStateHelper.setCurrentLanguage}
        items={languages}
      />

      <Dropdown
        dropdown={getDropdownByName('dialects')}
        setIsOpenDropdown={setIsOpenDropdown}
        onChange={languagesStateHelper.setCurrentDialect}
        items={languagesStateHelper.getDialects()}
      />
    </div>
  )
}

export default LanguageSelector