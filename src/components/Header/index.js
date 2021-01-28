import logo from '../../images/logo.png'
import LanguageSelector from './LanguageSelector'
import React from 'react'

function Header () {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between items-center border-b border-gray-200 py-6 space-x-10">
        <div className="flex-none">
          <a href="/">
            <img className="h-8 w-auto sm:h-10" src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex-grow space-x-4">
          <LanguageSelector />
        </div>
        <nav className="flex-none space-x-10">
          <a href="/download" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Скачать
          </a>
          <a href="/upload" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Загрузить
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header