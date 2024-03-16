import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <div className='p-4 lg:p-0 md:w-[80%] lg:w-[1400px] mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      
      
    </>
  )
}

export default App
