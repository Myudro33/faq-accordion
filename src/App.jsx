import './App.css'
import { useState } from 'react'
import Accordion from './components/Accordion'

function App() {
  const [active,setActive] = useState(false)
  const accordionInfo = [
 {
  title:'Lorem ipsum dolor, sit amet ndus dolor magnam cumque elit. Suscipit.',
  answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam quia corrupti aliquid praesentium at quibusdam ad harum dolore minima reprehenderit error repellendus dolor magnam cumque, ipsum natus iste expedita?',
  active:false
 }
,{
  title:'Lorem ipsum dolor sit amet cawd daw dasd elit.',
  answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cumque culpa nemo beatae sed, neque dolorum voluptatem, sapiente expedita sequi amet natus consequatur aspernatur! Perferendis quas natus hic libero. Obcaecati?',
  active:false
}
,{
  title:'Lorem ipsum dahwjd n dand dna dnakjwnd adipisicing elit. Odio.',
  answer:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat, aut vel placeat quo officiis iure ea unde tempore esse ex? Error obcaecati non soluta voluptates, in vel sed nisi.',
  active:false
}
,{
  title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi.',
  answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae reiciendis necessitatibus corrupti voluptatum nesciunt? Atque repellendus minima non repudiandae accusamus blanditiis inventore esse quidem, explicabo tenetur, consequuntur in saepe voluptas.',
  active:false
}

  ]
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
          {accordionInfo.map((item,index)=>{
           return <Accordion key={index}
            active={active} 
            setActive={setActive} 
            title={item.title} answer={item.answer}/>
          })}
      </div>
    </div>
  )
}

export default App
