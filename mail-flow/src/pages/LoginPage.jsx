import React from 'react'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
        <Login name={'Login'} head={`Welcome Back`} haveOrNot={`Don't have an account?`} link={"/signup"} />
    </div>
  )
}

export default LoginPage