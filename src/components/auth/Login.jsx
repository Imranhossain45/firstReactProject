import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center bg-green-950 h-[80vh]'>
      <div className='text-white bg-white max-w-sm p-3'>
        <h2 className='text-green-800 font-bold text-2xl text-center mb-4'>Login</h2>
        <form action="" className='space-y-4'>
          <input type="email" name="email" id="" placeholder='Enter Email' className='w-full border p-3 rounded-2xl' />
          <input type="password" name="password" id="" placeholder='Enter password' className='w-full border p-3 rounded-2xl' />
          <button type='submit' className='bg-green-600 w-full p-3 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-green-800 mb-3'>Login</button>
        </form>
        <div>
          <button className='bg-green-900 w-full py-2 rounded my-2 hover:bg-green-800 cursor-pointer'>Login with Facebook</button>
          <button className='bg-green-900 w-full py-2 rounded my-2 hover:bg-green-800 cursor-pointer'>Login with Google</button>
          <button className='bg-green-900 w-full py-2 rounded my-2 hover:bg-green-800 cursor-pointer'>Login with Github</button>
        </div>
        <div className='text-green-600 flex gap-2'>
          <p>Don't Have an Account?</p>
          <Link to={'/register'} className='text-green-700 font-bold'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login