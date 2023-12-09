import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from './button'
import toast, { Toaster } from 'react-hot-toast';

const returnStatus = (n)=>{
    switch (n){
        case 0:
            return 'Not Reviewed'
        case 1:
            return 'Under Review'
        case 2:
            return 'Accepted'
        case 3:
            return 'Rejected'
    }

}
const ViewDesignAdmin = (onClick) => {
    const [feedbackText, setFeedbackText] = React.useState('')
    const [feedbackFile, setFeedbackFile] = React.useState(null)

    return (
        <div className="w-full p-10 bg-black bg-opacity-20 h-full z-50 absolute fixed">
            <div className="bg-white w-full h-full grid grid-cols-2">
                <img src={localStorage.getItem('aadminimage')} className='h-full w-full overflow-scroll '/>
            <div>
                <p>Design #{localStorage.getItem('aadminid')}</p>
                <p className='text-sm text-left p-4'>
                    {localStorage.getItem('aadmindesc')}
                </p>
                <textarea onChange={(e)=>{
                    setFeedbackText(e.target.value)
                }} id="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2 m-4" placeholder="Leave a comment..."></textarea>
                <input type='file' key='uploaded_file' onChange={(e)=>{
                    setFeedbackFile(e.target.files[0])
                }}/>
                <div className='flex px-4 space-x-2 mt-2 self-start'>
                <div onClick={()=>{

                }}>
                <div onClick={async()=>{
                    try{
                        let feedbackObject = new FormData()
                        feedbackObject.append('DesignId', localStorage.getItem('aadminid'))
                        feedbackObject.append('CustomerEmail', localStorage.getItem('aadmincustomeremail'))
                        feedbackObject.append('DesignerEmail', localStorage.getItem('aadmindesigneremail'))
                        feedbackObject.append('uploaded_file', feedbackFile)
                        feedbackObject.append('CustomerText', feedbackText)

                        const load = await axios.post('http://localhost:3000/api/submitfeedback',
                        feedbackObject,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                              }
                        }
                        )
                        toast.success('Feedback Succesfully Submitted')

                    }catch(e){
                        console.log(e)
                        toast.error(e.response.data.message || 'Something went wrong')
                    }
                }}>
                <Button text='Send Comment' />
                </div>
                </div>
                <div onClick={async()=>{
                    try{
                        const approval = await axios({
                            method: 'post',
                            url: 'http://localhost:3000/api/updateDesign/'+localStorage.getItem('aadminid'),
                            data: {
                                Status: 2
                            }
                        })
                        console.log(approval)
                        toast.success('Approved succesfully')
                        setTimeout(()=>{
                        window.location.reload()
                        },3000,6,8)
                    }catch(e){
                        toast.error('Something went wrong')
                        setTimeout(()=>{
                            window.location.reload()
                        },2000,6,8)
                    }
                }}>
                <Button text='Approve' />
                </div>

                <div onClick={async()=>{
                    try{
                        const approval = await axios({
                            method: 'post',
                            url: 'http://localhost:3000/api/updateDesign/'+localStorage.getItem('aadminid'),
                            data: {
                                Status: 3
                            }
                        })
                        toast.success('Rejected succesfully')
                        setTimeout(()=>{
                            window.location.reload()
                        },3000,6,8)
                    }catch(e){
                        toast.error('Something went wrong')
                        setTimeout(()=>{
                            window.location.reload()
                        },2000,6,8)
                    }
                }}>
                <Button text='Reject' />
                </div>

                <div onClick={()=>{
                    window.location.reload()
                }}>
                                    <Button text='Cancel' />

                </div>
                </div>
            </div>

            </div>
        </div>
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

export default function AdminTabs() {
  const [value, setValue] = React.useState(0);
    const [viewDesignAdmin, setViewAdmin] = React.useState(false)
    const [designRecords, setDesignRecords] = React.useState([
        <tr>
        <td scope="col" className="px-6 py-3">
            From
        </td>
        <td scope="col" className="px-6 py-3">
            DID
        </td>
        <td scope="col" className="px-6 py-3">
            Description
        </td>
        <td scope="col" className="px-6 py-3">
            Action
        </td>
        <td scope="col" className="px-6 py-3">
            Status
        </td>
     
    </tr>
    ])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(()=>{
    const fetchDesigns = async() =>{
        let graphics = []
        const data = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/viewCustomerAddressedDesign',
            data: {CustomerEmail: localStorage.getItem('activeaccount'),
        }
        })
        for (let i = 0; i < data.data.length; i++){
            graphics.push(
                <tr>
                <td scope="col" className="px-6 py-3">
                    {data.data[i].DesignerEmail}
                </td>
                <td scope="col" className="px-6 py-3">
                {data.data[i].id}
                </td>
                <td scope="col" className="px-6 py-3">
                {data.data[i].Description.slice(0,20)}
                </td>
                <td scope="col" className="px-6 py-3" onClick={async()=>{
                    //  const approval = await axios({
                    //     method: 'post',
                    //     url: 'http://localhost:3000/api/updateDesign/'+data.data[i].id,
                    //     data: {
                    //         Status: 1
                    //     }
                    // })
                    console.log(data.data[i])
                    localStorage.setItem('aadmindesigneremail', data.data[i].DesignerEmail)
                    localStorage.setItem('aadmincustomeremail', data.data[i].CustomerEmail)
                    localStorage.setItem('aadmindesc', data.data[i].Description)
                    localStorage.setItem('aadminid', data.data[i].id)
                    localStorage.setItem('aadminimage', `http://localhost:3000/publicfiles/${data.data[i].Files}`)
                    setViewAdmin(true)
                    window. scrollTo(0, 0)
                    console.log(localStorage.getItem('aadmindesigneremail'))
                }}>
                    <Button text='Review & Comment' onClick={()=>{
                    }}/>
                </td>
                <td scope="col" className="px-6 py-3">
                {returnStatus(data.data[i].Status)}
                </td>

             
            </tr>
            )
        }
        setDesignRecords(graphics)
    }
    fetchDesigns()
  }, [])

  return (
<div className='overflow-hidden p-0'>
{viewDesignAdmin ? <ViewDesignAdmin /> : <></>}
<Toaster />

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
        <Tab label="Submitted designs" {...a11yProps(0)} />

      </Tabs>
     <div className=' w-full'>
     <TabPanel value={value} index={0} sx={{width: '50%', height: '50%', bgcolor: 'background.black'}}>
     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    From
                </th>
                <th scope="col" className="px-6 py-3">
                    DID
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
             
            </tr>
        </thead>
        <tbody>
{designRecords}



        </tbody>
    </table>
</div>
      </TabPanel>
     </div>

    </Box>

</div>
  );
}