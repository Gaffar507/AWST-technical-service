import React from 'react'

type GlobalHeroProps = {
  title: string
  subTitle: string
  desc: string
}

const GlobalHero = ({title, subTitle, desc}: GlobalHeroProps) => {
  return (
      <section className="bg-gray-300/70 pb-16 pt-26 border-b border-gray-400/40">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00517d] uppercase mb-3 block">
            {title}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {subTitle}
          </h1>
          <p className="text-gray-700/90 text-base sm:text-lg leading-relaxed">
            {desc}
          </p>
        </div>
      </section>
  )
}

export default GlobalHero
