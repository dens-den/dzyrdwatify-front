import React from 'react'
import LanguageContext from './contexts/Language'
import useLanguagesState from './hooks/UseLanguagesState'
import * as ApiService from './services/ApiService'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const data = ApiService.fetchInitialData()
  const [ languages, languagesStateHelper ] = useLanguagesState(data.languages)

  return (
    <div className="flex flex-col h-screen relative bg-white">
      <LanguageContext.Provider value={{ languages, languagesStateHelper }}>
        <Header />
        <Content />
        <Footer />
      </LanguageContext.Provider>
    </div>
  )
}

export default App
