import * as LanguagesService from './LanguagesService'

function fetchInitialData() {
  const data = {
    languages: [
      {
        id: 1,
        title: 'Осетинский',
        dialects: [
          {
            id: 1,
            title: 'Иронский',
            stats: {
              wordForms: 2177,
              sentences: 360,
              tokens: 1030,
              texts: 70
            }
          },
          {
            id: 2,
            title: 'Дигорский',
            stats: {
              wordForms: 100,
              sentences: 56,
              tokens: 134,
              texts: 2
            }
          }
        ]
      }
    ]
  }

  data.languages = LanguagesService.prepareLanguages(data.languages)
  return data
}

export {
  fetchInitialData
}