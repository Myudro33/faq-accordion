import './App.css'
import Accordion from './components/Accordion'
import data from './data.json'

function App() {
  return (
    <div className='w-screen h-screen bg-light-pink  z-10'>
      <div className='xs:hidden lg:flex'>
        <img className='w-full' src="../public/assets/background-pattern-desktop.svg" alt="background" />
      </div>
      <div className='xs:flex lg:hidden'>
        <img className='w-full' src="../public/assets/background-pattern-mobile.svg" alt="background" />
      </div>
      <div className='xs:w-5/6 lg:w-1/2 lg:h-auto bg-white absolute xs:left-8 lg:left-1/4 top-36 z-30 rounded-2xl p-10'>
          <div className='flex items-center'>
            <img src="../public/assets/icon-star.svg" alt="star" />
            <h1 className='text-dark-purple xs:text-3xl lg:text-5xl font-bold ml-10'>FAQs</h1>
          </div>
          {data.map((item,index)=>{
           return <Accordion key={index}
            title={item.title} answer={item.answer}/>
          })}
      </div>
    </div>
  )
}

export default App
