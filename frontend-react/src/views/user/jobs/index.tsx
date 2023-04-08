import React from 'react'
import Banner from './components/Banner'
type Props = {}

const FindJobs = (props: Props) => {
  return (
    <div className="min-h-screen mt-3 grid h-full grid-cols-1 gap-5 ">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Banner/>
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Jobs Categories
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Freelance
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Full time
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default FindJobs