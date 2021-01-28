import React from 'react'
import { IconContext } from 'react-icons'
import { FaEllipsisV, FaExternalLinkAlt, FaRedoAlt } from 'react-icons/fa'

function Card () {
  return (
    <div className="flex-1 relative rounded-sm border border-gray-200">
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-y-auto px-10 py-9">
        <h1 className="text-4xl text-gray-600 font-medium">Кæй</h1>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-10">
          <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-sm">
              <table className="w-full divide-y divide-gray-200 border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                      Предложение
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="text-base text-gray-600">
                        Æмæ зæрдæ дарæн ис фидæны аз <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> суыдздзысты 100 сæры. Фæлæ уал сæм хъæуы зилын.
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <IconContext.Provider value={{ className: "text-gray-600 cursor-pointer text-lg" }}>
                        <div className="flex justify-between">
                          <div><FaExternalLinkAlt /></div>
                          <div><FaEllipsisV /></div>
                          <div><FaRedoAlt /></div>
                        </div>
                      </IconContext.Provider>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="text-base text-gray-600">
                      Ацы хæдзарады сырдтæ фылдæр кæнынц æмæ уый тынг хорз у. Русгидро-йы хицауад дæр æмбары æрдз хъахъхъæнын <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> хъæуы,
                      ахæм хъуыддæгтæ фылдæр кæнын <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> хъæуы, уый æмæ сын алывæрсыг æххуыс кæнæм.
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <IconContext.Provider value={{ className: "text-gray-600 cursor-pointer text-lg" }}>
                        <div className="flex justify-between">
                          <div><FaExternalLinkAlt /></div>
                          <div><FaEllipsisV /></div>
                          <div><FaRedoAlt /></div>
                        </div>
                      </IconContext.Provider>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="text-base text-gray-600">
                        Специалисттæ æмæ цуанæттæ сæ зæрдæ дарынц, цалдæр азы фæстæ Ирыстоны хъæдты
                        хъуазтæ <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> сбирæ уыдзысты, æмæ сыл цуан кæнæн <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> уыдзæн, ууыл.
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <IconContext.Provider value={{ className: "text-gray-600 cursor-pointer text-lg" }}>
                        <div className="flex justify-between">
                          <div><FaExternalLinkAlt /></div>
                          <div><FaEllipsisV /></div>
                          <div><FaRedoAlt /></div>
                        </div>
                      </IconContext.Provider>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="text-base text-gray-600"><span className="border-b-2 border-yellow-400 border-dashed">кæй</span> фырт дæ?</div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <IconContext.Provider value={{ className: "text-gray-600 cursor-pointer text-lg" }}>
                        <div className="flex justify-between">
                          <div><FaExternalLinkAlt /></div>
                          <div><FaEllipsisV /></div>
                          <div><FaRedoAlt /></div>
                        </div>
                      </IconContext.Provider>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="text-base text-gray-600">
                        Стъараполы, Дагестаны æмæ Цæгат Ирыстоны фатеры аргъæн чи бафыста, æмæ <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> асайдтой, уыдонæн баххуыс кæндзысты.
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <IconContext.Provider value={{ className: "text-gray-600 cursor-pointer text-lg" }}>
                        <div className="flex justify-between">
                          <div><FaExternalLinkAlt /></div>
                          <div><FaEllipsisV /></div>
                          <div><FaRedoAlt /></div>
                        </div>
                      </IconContext.Provider>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="flex items-center">
                        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <div className="text-base text-gray-600">
                        Субъектты разамонджыты раныхæсты размæ Александр Хлопонин загъта, алы ахæм объектæн дæр, эксплуатацийы раттыны размæ хъуамæ конд <span className="border-b-2 border-yellow-400 border-dashed">кæй</span> æрцæуа сæрмагонд пълан.
                      </div>
                    </td>
                    <td className="px-6 py-4 border border-gray-200">
                      <IconContext.Provider value={{ className: "text-gray-600 cursor-pointer text-lg" }}>
                        <div className="flex justify-between">
                          <div><FaExternalLinkAlt /></div>
                          <div><FaEllipsisV /></div>
                          <div><FaRedoAlt /></div>
                        </div>
                      </IconContext.Provider>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card