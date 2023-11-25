import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Nav from './nav'
import Pagination from './Pagination';
import CheckOnlyCaption from './checkOnlyCaption';
import "react-datepicker/dist/react-datepicker.css";
import Button from './button';
import Toggle from './Toggle';
import FileUploadTool from './FileUploadTool';
import Ftthree from './ftthree'
import Fttwo from './fttwo'
export default function Applc() {



  


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

<div className="h-4/5 w-full overflow-y-scroll col-span-2">

<form action="documents/review" method="GET">
        <div class="shadow overflow-hidden sm:rounded-md p-8">
        <FileUploadTool caption="Files" key="resume-cv" />
        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
        <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <div className=""><Button text="Submit Design"/></div>

        </div>
      </form>




</div>
</div>

        </div> 
    )
}
