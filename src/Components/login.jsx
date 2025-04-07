import React, { useState } from 'react'

const login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const[emailErr,setEmailErr]=useState('');
  const [isFormValid,setFormValid]=useState(false);

  const validateEmail=(e)=>{
    setEmail(e.target.value);
    
    if(e.target.value===null || e.target.value===''){
      setEmailErr('pls input the email');
      setFormValid(false);
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)){
      setEmailErr('pls input the valid email');
      setFormValid(false)

    }
    else{
      setEmailErr('');
      setFormValid(true);
    }
}
  const submitFormHandler=()=>{
    e.preventDefault();
    console.log("Form submitted ",email,password);
    setEmail('');
    setPassword('');
  }
  return (
    <div className='mt-10'>
      <>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="logo.png"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={submitFormHandler} method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              onChange={validateEmail}
              value={email}
              autoComplete="email"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <div className="text-red-500">{emailErr}</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-blue-400"
            disabled={ !isFormValid}
      >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
</>
    </div>
  )
}

export default login