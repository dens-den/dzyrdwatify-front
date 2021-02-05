import React, { useState } from 'react'
import * as ApiService from '../../services/ApiService'
import { IconContext } from 'react-icons'
import { FaSearch, FaCaretUp, FaRegFrown } from 'react-icons/fa'

function Search () {
  const [ wordFormList, setWordFormList ] = useState([])
  const [ query, setQuery ] = useState(null)

  function searchWordForms(query) {
    if (!query) {
      setWordFormList([])
      setQuery(null)
      return
    }

    const items = ApiService.searchWordForms(query)
    setWordFormList(items)
    setQuery(query)
  }

  return (
    <div className="relative flex flex-col w-96 rounded-sm border border-gray-200">
      <div>
        <input
          onChange={e => searchWordForms(e.target.value)}
          className="border-b border-gray-200 h-14 w-full pl-6 pr-12 rounded-sm rounded-b-none text-base focus:outline-none"
          placeholder="Начните вводить слово..."
          type="input"
        />

        <IconContext.Provider value={{ className: "absolute right-0 top-0 mt-5 mr-4 text-gray-300 h-4 w-4 fill-current" }}>
          <FaSearch />
        </IconContext.Provider>
      </div>

      <div className="absolute left-0 right-0 top-14 bottom-0 overflow-y-auto">
        {!wordFormList.length && !query && (
          <div className="text-gray-400 text-center mt-40">
            <div className="flex justify-center mb-2">
              <IconContext.Provider value={{ className: "text-gray-300 text-2xl" }}>
                <FaCaretUp />
              </IconContext.Provider>
            </div>
            Используйте строку поиска для<br /> получения списка слов
          </div>
        )}

        {!wordFormList.length && query && (
          <div className="text-gray-400 text-center mt-40">
            <div className="flex justify-center mb-2">
              <IconContext.Provider value={{ className: "text-gray-300 text-2xl" }}>
                <FaRegFrown />
              </IconContext.Provider>
            </div>
            По вашему запросу ничего не найдено.<br /> Проверьте ввод на опечатки.
          </div>
        )}

        {wordFormList.map(item => {
          return (
            <div className="flex relative transform scale-100 text-xs py-1 px-6 h-12 items-center hover:bg-gray-100" key={item.id}>
              <div className="text-gray-500 font-medium text-base">{item.form}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search