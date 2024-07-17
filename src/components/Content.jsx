import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faHashtag } from '@fortawesome/free-solid-svg-icons'

function Content({ mainTitle, articleTitle, keywords, date, children }) {
  return (
    <div className="antialiased text-lg">
        <header className="mt-20 shadow">
          <div className="bg-purple-300/75 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {mainTitle}
              </h1>
            </div>
          </div>
          <div className="bg-rose-200/75 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
                {articleTitle}
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-gray-600">
                  <FontAwesomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" icon={faHashtag} />
                  {keywords}
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <FontAwesomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" icon={faCalendarDay} />
                  {date}
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                {children}
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Content
