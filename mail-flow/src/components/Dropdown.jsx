import React from 'react'
import useToggle from '../hooks/useToogle';


const Dropdown = ({addLead,addColdMail,addDelay}) => {
  const [dropdown,setDropdown] = useToggle(false);

  return (
    <div  ><button id="dropdownDefaultButton" onClick={setDropdown}  data-dropdown-toggle="dropdown" className=" z-10 flex flex-row items-center justify-center shadow w-44 h-10 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm text-center " type="button">Add Node
    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round " strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
    <div id="dropdownDelay" className={`z-10 absolute ${!dropdown && `hidden`} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}>
    <ul className="py-2 text-sm text-black ">
      <li>
        <button onClick={addLead} className="block w-full px-4 py-2 hover:outline-double">Lead Source</button>
      </li>
      <li>
        <button onClick={addColdMail}  className="block  w-full px-4 py-2 hover:outline-double">Cold Email</button>
      </li>
      <li>
        <button onClick={addDelay}  className="block  w-full px-4 py-2 hover:outline-double ">Delay</button>
      </li>
    
    </ul>
</div>
    </div>
  )
}

export default Dropdown