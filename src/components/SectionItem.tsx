import * as React from "react"
import { memo, PropsWithChildren } from "react"

interface SectionItemProps extends PropsWithChildren<{}>{
  title: string
  subtitle: string
  mode: {
    row?: boolean,
    reverse?: boolean
  }
}

export const SectionItem = memo<SectionItemProps>(({ mode, children, subtitle, title }) => {
  const { row = true, reverse = false } = mode
  const flexRowStyle = row ? (reverse ? 'flex-row-reverse sm:flex-col md:flex-col' : 'flex-row sm:flex-col md:flex-col') : 'flex-col'
  return (
      <section className='container mx-auto mt-10'>
        <div className={`flex ${flexRowStyle} justify-center items-center max-md:items-start`}>
          <div className="flex-1 sm:flex-grow-0">
            <div className='p-10 sm:p-4 max-md:w-full max-md:flex max-md:justify-start max-md:flex-col'>
              <h2 className={`h2 max-md:text-left ${row ? 'text-left' : 'text-center'}`}>
                {title}
              </h2>
              <p className="description-text">{subtitle}</p>
            </div>
          </div>
          <div className="flex-1 sm:flex-grow max-md:w-full">
            <div className="w-10/12 min-lg:max-w-1/2 mx-auto">
              {children}
            </div>
          </div>
        </div>
      </section>
  )
})