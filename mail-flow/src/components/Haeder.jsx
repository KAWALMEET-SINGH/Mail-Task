import React from 'react'

const Header = () => {
  return (
    <header>
    <nav className="bg-gray-200  border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex flex-wrap  l">
          <img
            src="src\assets\futureblink.png"
            className="mr-3 h-6 sm:h-9 mix-blend-multiply"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-600 ">
            FutureBlink
          </span>
        </div>
        <div className="flex items-center lg:order-2">
          <a
            href="/login"
            className="text-blue-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="text-blue-400 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
          >
            Get started
          </a>
        </div>
        
      </div>
    </nav>
  </header>
  
  )
}

export default Header