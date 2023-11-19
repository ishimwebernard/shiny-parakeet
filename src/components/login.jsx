import React, { useState } from 'react'
import Logocomponent from '../assets/logocomponent'
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
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
          <label for="email-address" class="sr-only">Email address</label>
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
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
            const signIn = await axios({
              method: 'post',
              data: {Email:email,Password:password},
              url: 'http://localhost:3000/api/login'
            })
            localStorage.setItem('activeaccount', email)
              toast.success('Login Succesful')
              window.location.href = '/myaccount'
            
          }catch(error){
            console.log(error.response.data.message)
            console.log(email)
            try{toast.error(error.response.data.details[0].message)}catch(e){}
            try{toast.error(error.response.data.message)}catch(e){}
            //window.location.reload()
          }
        }} class="group bg-blue-600 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
        <button class="group bg-blue-600 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign Up
          </button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
