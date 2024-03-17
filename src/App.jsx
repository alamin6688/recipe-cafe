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
      toast.error("Recipe already selected !");
    } else {
      setSelectedRecipes([...selectedRecipes, recipe]);
      toast.success("Recipe added to Cook list !");
    }
  };

  return (
    <main className="w-[90%]  mx-auto">
      <div className="p-4 lg:p-0 ">
        <Navbar />
        <Banner className="w-full"></Banner>
        <CardCaption />
        <div className="flex flex-col md:flex-row gap-5  justify-center mx-auto">
          <Recipes handleWantToCook={handleWantToCook} />
          <Sidebar selectedRecipes={selectedRecipes} />
        </div>
      </div>

      {/* toast */}
      <div className="App">
        <ToastContainer />
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
