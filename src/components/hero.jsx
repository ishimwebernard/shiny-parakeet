import React from 'react'
import Fore from '../assets/home-page.svg'
import Nav from './nav'
export default function Hero() {
    return (
        <div>
            <div class="relative bg-white overflow-hidden">
            <Nav />

  <div class="max-w-7xl mx-auto mt-10">
    <div class="relative z-10 pt-10 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

    

      <main class="mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl mt-50 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="deep-text block xl:inline text-blue-600">Designs Tracking &</span>
            <span class="deep-text block green xl:inline"> Correction system</span> 
          </h1>
          <p class="mt-6  text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Elevate your design process with our innovative system. Experience a new level of precision and efficiency that simplifies collaboration, enhances creativity, and ensures exceptional design outcomes. Join us on a journey to transform your design management and elevate your creative potential

</p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="mt-20 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class=" w-full object-cover sm:h-72 md:h-full lg:w-full lg:h-full" src={Fore} alt="" /> 
  </div>
</div>
        </div>
    )
}
