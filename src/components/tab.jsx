import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from './button';
import FileUploadTool from './FileUploadTool';
import Logocomponent from '../assets/logocomponent'
import axios from 'axios'
let retval = []



const Nav = () => {
  return (
      <nav class="bg-white border-gray-200 px-2 py-4 z-50">
<div class="container mx-auto flex flex-wrap items-center justify-between">
<a href="/" class="flex flex-col">
  <Logocomponent />
    <small class="self-center text-sm font-thin tet-center leading-tight">An Education and Leadership Division of PRIMECS LLC</small>
</a>
<p>{localStorage.getItem('activeaccount')}</p>
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

  )
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const ViewFeedback = (onClick) => {
  return (
      <div className="w-full p-40 bg-black bg-opacity-20 h-screen z-10 absolute">
          <div className="bg-gray-100 w-full h-full">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

      <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  From
              </th>
              <td class="px-6 py-4">

                  {localStorage.getItem('afrom')}
                               </td>
            
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Design ID
                  
              </th>
              <td class="px-6 py-4">
                  {localStorage.getItem('adid')}
              </td>
            
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Description
              </th>
              <td class="px-6 py-4">
          {localStorage.getItem('atext')}

              </td>
            
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  File
              </th>
              <td class="px-6 py-4">
          {localStorage.getItem('afile')}

              </td>
            
          </tr>
          
          
          



      </tbody>
  </table>
  <button onClick={()=>{
    window.location.reload();


  }} class="text-white bg-green-500 hover:bg-green-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">OK</button>

          </div>
      </div>
  )
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [viewFeedback, setViewFeedback] = React.useState(false)
  const [feedbacks, setFeedbacks] = React.useState([
    <tr>
    <p>No data found!</p>
</tr>
  ])

  const fetchData = React.useCallback(async() => {
    const fbks = await axios({
      method: 'post',
      data: {Email: localStorage.getItem('activeaccount')},
      url: 'http://localhost:3000/api/getFeedback'
    })
    console.log(fbks)
    if (fbks.data.length != 0){
      for(let i=0; i<fbks.data.length;i++){
        retval.push(
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden">
              {fbks.data[i].CustomerText.match(/^.{1,50}.*?\b/)[0]}
          </th>
          <td class="px-6 py-4">
          {fbks.data[i].CustomerEmail}
          </td>
          <td class="px-6 py-4">
          {fbks.data[i].DesignId}
          </td>
          <td class="px-6 py-4">
              <p  onClick={()=>{
                localStorage.setItem('atext',fbks.data[i].CustomerText)
                localStorage.setItem('adid',fbks.data[i].DesignId)

                localStorage.setItem('afrom',fbks.data[i].CustomerEmail)
                localStorage.setItem('afile', fbks.data[i].CustomerFiles)

                setViewFeedback(true)
              }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
          </td>
      </tr>
        )
      }
    }
    setFeedbacks(retval)
  }, [])
  React.useEffect(()=>{

   fetchData()
  }, [fetchData])
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCliclView = () =>{
    setViewFeedback(false)
    alert('viewFeedback')
  }
  return (
   <>

   {viewFeedback ? <ViewFeedback onClick={()=>{handleCliclView()}} /> : <></>}
   <Nav />

   <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '30%'}}
      >
        <Tab label="Submit contents" {...a11yProps(0)} />
        <Tab label="View Feedbacks" {...a11yProps(1)} />

      </Tabs>
     <div className=' w-screen'>
     <TabPanel value={value} index={0} sx={{width: '50%', bgcolor: 'background.black'}}>
        <div class="shadow overflow-visible sm:rounded-md p-8 ">
        <FileUploadTool caption="Resume or CV" key="resume-cv" />
        <div class="h-10"></div>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your description here..."></textarea>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none">
              <Button text="Review and Submit" />
            </button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Text
                </th>
                <th scope="col" class="px-6 py-3">
                    From
                </th>
                <th scope="col" class="px-6 py-3">
                    Design ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
            {feedbacks}

        </thead>
        <tbody>
        </tbody>
    </table>
</div>

      </TabPanel>
     </div>

    </Box>
   </>
  );
}