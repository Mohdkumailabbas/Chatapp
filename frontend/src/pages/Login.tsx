// import React from 'react'

import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2" >
              <span className="text-base label-text text-white">
                Username
              </span>
            </label>
            <input type="text " placeholder="Enter Username " className="w-full input input-bordered h-10"></input>
          </div>
          <div className="mb-2">
            <label className="label p-2 ">
              <span className="text-base label-text text-white">
                Password
              </span>
            </label>
            <input type="password" placeholder="Enter Password " className="w-full input input-bordered h-10"></input>
          </div>
           <Link className="text-white font-light  hover:text-blue-600 " to ="/signup">Haven't signed up yet?</Link>
           <button className="btn btn-block btn-sm mt-2 hover:bg-gray-600">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login