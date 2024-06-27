import React from 'react'
import Login from '../components/Login'

const SignUpPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
    <Login name={'SignUp'} head={`Welcome`} haveOrNot={`Already have an account?`} link={"/login"} />
</div>
  )
}

export default SignUpPage