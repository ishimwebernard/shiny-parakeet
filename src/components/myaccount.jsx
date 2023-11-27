import React from 'react'
import VerticalTabs from './tab'
import Logocomponent from '../assets/logocomponent'
import AdminTabs from './admintabs'

const Administrator = () => {
 return (
    <div>
                <nav class="bg-white border-gray-200 px-2 py-4 z-50 w-full">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
  <a href="/" class="flex flex-col">
    <Logocomponent />
      <small class="self-center text-sm font-thin tet-center leading-tight">An Education and Leadership Division of PRIMECS LLC</small>
  </a>
  <p>isbernard2300@gmail.com</p>
  <p>ADMIN</p>
  <div class="flex md:order-2">
    <a href="/signin">
    <button type="button" class="text-white bg-green-500 hover:bg-green-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Log Out</button>

    </a>
      <button data-collapse-toggle="mobile-menu-4" type="button" class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>

  </div>
</nav>
<AdminTabs />

    </div>
 )
}
const isAdmin = true




const User = () => {

    return (
        <div>
        <VerticalTabs />
        </div>
    )
}
export default function MyAccount(){
    return (
        <div className='w-full bg-black overflow-hidden p-0'>

        {isAdmin ? <Administrator/> : <User />}

        </div>
    )
}