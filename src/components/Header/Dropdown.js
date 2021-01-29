import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { FaAngleDown } from 'react-icons/fa'

function Dropdown({ items, dropdown, setIsOpenDropdown, onChange }) {
  const selectedItem = items.find(item => item.selected)

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => { setIsOpenDropdown(dropdown.name, !dropdown.isOpen) }}
          className="items-center relative w-48 inline-flex rounded border border-gray-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-gray-100"
          aria-haspopup="true"
          aria-expanded="true"
          id="options-menu"
          type="button"
        >
          { selectedItem.title }
          <IconContext.Provider value={{ className: "-mr-1 ml-2 h-5 w-5 absolute right-2 text-gray-300 text-xs" }}>
            <FaAngleDown />
          </IconContext.Provider>
        </button>
      </div>

      { dropdown.isOpen &&
        <div
          className="origin-top-right absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          aria-labelledby="options-menu"
          aria-orientation="vertical"
          role="menu"
        >
          {items.map(item => {
            return (
              <div className="py-1" key={item.id}>
                <span
                  onClick={() => { setIsOpenDropdown(dropdown.name, !dropdown.isOpen); onChange(item.id) }}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem">
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setIsOpenDropdown: PropTypes.func.isRequired,
  dropdown: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Dropdown