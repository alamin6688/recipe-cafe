import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CardCaption from "./Components/CardCaption/CardCaption";
import Navbar from "./Components/Navbar/Navbar";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleWantToCook = (recipe) => {
    if (selectedRecipes.some((item) => item.name === recipe.name)) {
      toast.error("Already exist !");
    } else {
      setSelectedRecipes([...selectedRecipes, recipe]);
      toast.success("Recipe added to Cooklist !");
    }
  };

  return (
    <>
    <main className="w-[90%]  mx-auto">
      <div className="p-4 lg:p-0 ">
        <Navbar></Navbar>
        <Banner className="w-full"></Banner>
        <CardCaption></CardCaption>
        <div className="flex flex-col md:flex-row gap-5  justify-center mx-auto">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Sidebar selectedRecipes={selectedRecipes}></Sidebar>
        </div>
      </div>

      {/* Toastify */}
      <div className="App">
        <ToastContainer></ToastContainer>
      </div>

    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
