import React, { useState } from 'react'
import Logocomponent from '../assets/logocomponent'
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios'
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState(1)
  const [location, setLocation] = useState('')



    return (
        <div>
      <Toaster />

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
  <div class="max-w-md w-full space-y-8">
    <div>
    <div className="mx-auto h-12 w-auto p-auto  px-32 mb-10">
        <Logocomponent />
        </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
     
    </div>
    <div class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true"/>
      <div class="rounded-md shadow-sm -space-y-px">
      <div>
          <label for="username" class="sr-only">Email address</label>
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} id="username" name="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
        </div>

        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input onChange={(e)=>{
            setUserName(e.target.value)
          }} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User Names" />
        </div>

        <div>
          <label for="phone" class="sr-only">Email address</label>
          <input onChange={(e)=>{
            setPhone(e.target.value)
          }} id="phone" name="phone" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
        </div>
        <div>
          <label for="location" class="sr-only">Email address</label>
          <input onChange={(e)=>{
            setLocation(e.target.value)
          }} id="location" name="location" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Location" />
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
        <label for="cars">Role</label>

<select name="cars" id="cars">
  <option value="designer" onClick={()=>{
    alert(role)
    setRole(0)
  }} onSelect={()=>{
    alert(role)

  }}>Reviewer</option>
  <option value="reviewer" onClick={()=>{
    setRole(1)
  }}>Designer</option>
</select>

<div id="dropdownRadioBgHover" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input onClick={()=>{
                localStorage.setItem('arole', 0)
            }} id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="default-radio-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Reviewer</label>
        </div>
      </li>
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input onClick={()=>{
                localStorage.setItem('arole', 1)
            }} id="default-radio-6" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="default-radio-6" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Designer</label>
        </div>
      </li>
    </ul>
</div>
      </div>

      <div class="flex items-center justify-between">

        <div class="text-sm">
          <a href="#" class="font-medium text-green-500 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <button onClick={async()=>{
          try{
            await axios({
              method: 'post',
              data: {Email:email,Password:password, Username: username, Phone: phone, Location: location, Role: role},
              url: 'http://localhost:3000/api/signup'
            })
            localStorage.setItem('activeaccount', email)
              toast.success('Sending you to your account')
              window.location.href = '/myaccount'
            
          }catch(error){

            try{toast.error(error.response.data.details[0].message)}catch(e){}
            try{toast.error(error.response.data.message)}catch(e){}
          }
        }} class="group bg-blue-600 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Create Account
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
