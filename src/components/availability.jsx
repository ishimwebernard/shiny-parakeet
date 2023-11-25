import React, { useState } from 'react'
import Nav from './nav'
import Pagination from './Pagination';
import "react-datepicker/dist/react-datepicker.css";
import Button from './button';





export default function Availability() {
let availFrom = '';
let availTo = '';

  const TextWithLabel = ({labelText, onChange}) => {
    return (
      <div class="col-span-6 sm:col-span-3">
      <label for="last-name" class="block text-sm font-medium text-gray-700">{labelText}</label>
      <input onChange={(e)=>{
        onChange(e.target.value)
      }} type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>
    )
  }
 
  const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="h-screen w-screen overflow-y-hidden">
<Nav />

<div className="w-full  md:grid md:grid-cols-3 px-20">
<div className="md:col-span-1 h-full relative overflow-y-hidden">
<Pagination elements={[
  {
    route: "/documents",
    caption: "Submit Design"
  },

  {
    route: "/availability",
    caption: "Received Designs"
  },
  {
    route: "/streandwe",
    caption: "Confirmed Designs"
  }
]} />
</div>

<div className="h-full w-full overflow-y-scroll col-span-2 p-4">
<div class="mt-10 sm:mt-0">
    <div class="mt-0">
    <div className='grid grid-cols-2 border-l border-r border-t border-gray-200 hover:bg-gray-200'>
      <p>Design Name</p>
<div className="flex flex-cols gap-2">
<Button text="View"/>
<Button text="Confirm"/>
</div>
    </div>
    </div>
 
</div>





</div>
</div>

        </div> 
    )
}
