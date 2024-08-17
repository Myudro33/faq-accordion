import './App.css'
import { useState } from 'react'

function App() {
  const [active,setActive] = useState(false)
  return (
    <div className='w-screen h-screen bg-light-pink  z-10'>
      <div className='xs:hidden lg:flex'>
        <img className='w-full' src="../public/assets/background-pattern-desktop.svg" alt="background" />
      </div>
      <div className='xs:flex lg:hidden'>
        <img className='w-full' src="../public/assets/background-pattern-mobile.svg" alt="background" />
      </div>
      <div className='w-1/2 h-1/2 bg-white absolute left-1/4 top-36 z-30 rounded-2xl p-10'>
          <div className='flex items-center'>
            <img src="../public/assets/icon-star.svg" alt="star" />
            <h1 className='text-dark-purple text-5xl font-bold ml-10'>FAQs</h1>
          </div>
          <div className='w-full mt-10 '>
            <div onClick={()=>setActive(!active)} className='flex justify-between cursor-pointer'>
              <h1 className='text-dark-purple hover:text-gray-purple font-bold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              active && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              active && "!rotate-180"
            }`}
          />
        </svg>
            </div>
            <div className={`w-full bg-gray-purple grid overflow-hidden transition-all duration-300 ease-in-out ${active?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima suscipit voluptate accusantium et laborum. Magnam, veniam. Reiciendis, nisi magnam illum sint, distinctio minima at, officia ipsa reprehenderit repellat optio suscipit.              
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
