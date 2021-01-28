function prepareLanguages(languages) {
  return languages.map((language, index) => {
    language.selected = index === 0
    language.dialects.map((dialect, dIndex) => {
      dialect.selected = index === 0 && dIndex === 0
      return dialect
    })

    return language
  })
}

export {
  prepareLanguages
}