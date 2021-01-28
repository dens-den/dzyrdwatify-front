import React from 'react'

function Search () {
  return (
    <div className="relative flex flex-col w-96 rounded-sm border border-gray-200">
      <div>
        <input className="border-b border-gray-200 h-14 w-full pl-6 pr-12 rounded-sm rounded-b-none text-base focus:outline-none"
          type="input" placeholder="Быстрый поиск..." />
        <svg className="absolute right-0 top-0 mt-5 mr-4 text-gray-300 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" fill="currentColor" aria-hidden="true">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </div>

      <div className="absolute left-0 right-0 top-14 bottom-0 overflow-y-auto">
        {Array(30).fill().map(item => {
          return (
            <div className="flex relative transform scale-100 text-xs py-1 px-6 h-12 items-center hover:bg-gray-100">
              <div className="text-gray-500 font-medium text-base">ДэнСъелВсеСлова</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search