import React from 'react'
import Search from './Search'
import Card from './Card'

function Content () {
  return (
    <section className="container mx-auto px-4 flex flex-grow flex-shrink pt-14 pb-14 space-x-10">
      <Search />
      <Card />
    </section>
  )
}

export default Content