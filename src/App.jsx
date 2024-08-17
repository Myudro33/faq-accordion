import './App.css'
function App() {
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
      </div>
    </div>
  )
}

export default App
