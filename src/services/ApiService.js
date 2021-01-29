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

function searchWordForms(query) {
  const list = [
    { id: 1, form: 'Компьютер' },
    { id: 2, form: 'ДэнВсеСъел' },
    { id: 3, form: 'Плак' },
    { id: 4, form: 'Дно' },
    { id: 5, form: 'Аллергия' },
    { id: 6, form: 'Миюша' },
    { id: 7, form: 'Енот' },
    { id: 8, form: 'Трехсотлетний труп' },
    { id: 9, form: 'Прохвост' },
    { id: 10, form: 'Монеточка' },
    { id: 11, form: 'Авава' },
    { id: 12, form: 'Бдыщ кусь хрусть' },
    { id: 13, form: 'Дэн снова соврал, что пошел спать' },
    { id: 14, form: 'Спустя час Дэн снова соврал' },
    { id: 16, form: 'Дэн спортсмен, он качает ноги и ...' },
    { id: 17, form: 'Дима сказал, что сон прекрасный' },
    { id: 18, form: 'Диманальные сноведения' },
    { id: 19, form: 'Дима любить Буся черный' },
    { id: 20, form: 'Дома хорошо, а в сеновале лучше' },
    { id: 21, form: 'Дно это вершина предыдущего уровня' },
    { id: 22, form: 'Опачки кнопочки бдыщ' },
    { id: 23, form: 'Осетинский язык' },
    { id: 24, form: 'Азбука' },
    { id: 25, form: 'Базука' },
    { id: 26, form: 'Василиса ужасная' },
    { id: 27, form: 'Дэн узбек язык не знать говорить как утка кря' },
    { id: 28, form: 'Гадкий утенок' }
  ]

  return list.filter(item => item.form.toLowerCase().startsWith(query.toLowerCase()))
}

export {
  fetchInitialData,
  searchWordForms
}