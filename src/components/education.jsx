import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Nav from './nav'
import Pagination from './Pagination';
import CheckOnlyCaption from './checkOnlyCaption';
import "react-datepicker/dist/react-datepicker.css";
import Button from './button';
import Toggle from './Toggle';


export default function Education() {
  let highSchool, highSchoolAddress, highSchoolFrom, highSchoolTo, highFinish;
  let uniSchool, uniSchoolAddress, uniSchoolFrom, uniSchoolTo, uniFinish;
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
 

    return (
        <div className="h-screen w-screen overflow-y-hidden">
<Nav />

<div className="w-full  md:grid md:grid-cols-3 px-20">
<div className="md:col-span-1 h-full relative overflow-y-hidden">
<Pagination elements={[
  {
    route: "/documents",
    caption: "Submit Contents"
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

<div className="h-full w-full overflow-y-scroll col-span-2">
<div class="mt-10 sm:mt-0">
    <div class="mt-0">
     <p>Request for Initial Design??</p>
    </div>
 
</div>





</div>
</div>

        </div> 
    )
}
