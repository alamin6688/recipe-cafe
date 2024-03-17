import './App.css'
import Banner from './Components/Banner/Banner'
import CardCaption from './Components/CardCaption/CardCaption'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {


  return (
    <>
      <div className='p-4 lg:p-0 md:w-[80%] lg:w-[1400px] mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
        <CardCaption></CardCaption>
        <div className='lg:flex gap-6 lg:p-4'>
          <Recipes></Recipes>
          <Sidebar></Sidebar>
        </div>
      </div>
      
      
    </>
  )
}

export default App
