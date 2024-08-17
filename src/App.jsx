import './App.css'
function App() {
  return (
    <div className='w-screen h-screen'>
      <div className='xs:hidden lg:flex'>
        <img className='w-full' src="../public/assets/background-pattern-desktop.svg" alt="background" />
      </div>
      <div className='xs:flex lg:hidden'>
        <img className='w-full' src="../public/assets/background-pattern-mobile.svg" alt="background" />
      </div>
    </div>
  )
}

export default App
