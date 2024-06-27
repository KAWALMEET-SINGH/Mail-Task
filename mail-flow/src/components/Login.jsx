import React, { useState } from 'react'

const Login = ({head,name,buttonText,haveOrNot,link}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const registerOrLogin = async(e) =>{
        try {
            e.preventDefault();
            const res = await fetch(`api/auth/${name ==="Login" ? "signin":"signup"}`,
                {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email,password}),
                  }
            )
            const data =  await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className=" w-full max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-md ">
    <div className="px-6 py-4">

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">{head}</h3>

        <p className="mt-1 text-center text-gray-500 ">{name}</p>

        <form>
            <div className="w-full mt-4">
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input value={password} onChange={(e)=> setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="/signup" className="text-sm text-gray-600 dark:text-black hover:text-gray-500">Forget Password?</a>

                <button onClick={registerOrLogin} className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                   {name}
                </button>
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
        <span className="text-sm text-gray-600">{haveOrNot}</span>

        <a href={`${link}`}className="mx-2 text-sm font-bold text-blue-500  hover:underline">{name ==="Login" ? "SignUp":"Login" }</a>
    </div>
</div>
  )
}

export default Login