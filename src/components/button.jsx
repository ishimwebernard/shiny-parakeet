import React from 'react'

export default function Button({text, background}) {
    return (
       <div className="bg-blue-600  cursor-pointer hover:opacity-90">
                  <button type="button" class="text-white w-full bg-blue-600 hover:bg-blue-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">{text}</button>

       </div>
    )
}
