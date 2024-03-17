import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import CardCaption from './Components/CardCaption/CardCaption';
import Navbar from './Components/Navbar/Navbar';
import Recipes from './Components/Recipes/Recipes';
import Sidebar from './Components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleWantToCook = (recipe) => {
    if (!selectedRecipes.some(item => item.id === recipe.id)) {
      setSelectedRecipes(prevSelectedRecipes => [...prevSelectedRecipes, recipe]);
      toast.success('Recipe added to Cook list!');
    } else {
      toast.error('Recipe already selected!');
    }
  };

  return (
    <>
      <div className='p-4 lg:p-0 w-[90%]  mx-auto'>
        <Navbar />
        <Banner />
        <CardCaption />
        <div className='lg:flex gap-6 lg:p-4 w-[90%]  mx-auto'>
          <Recipes handleWantToCook={handleWantToCook} />
          <Sidebar selectedRecipes={selectedRecipes} />
        </div>
      </div>
      
      <div className="App">
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
