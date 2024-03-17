import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHourglassStart } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ selectedRecipes }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [hiddenRows, setHiddenRows] = useState([]);

    const handlePreparingButton = (recipeIndex) => {
    const updatedSelectedRecipes = [...selectedRecipes];
    const removedRecipe = updatedSelectedRecipes.splice(recipeIndex, 1)[0];

    setCurrentlyCooking((prevState) => [...prevState, removedRecipe]);
    setHiddenRows((prevState) => [...prevState, recipeIndex]);

    // Show toast
    toast.success("Recipe added to Currently Cooking list !");
    };

    const getDisplayedIndex = (index) => {
        let displayedIndex = 0;
        for (let i = 0; i <= index; i++) {
            if (!hiddenRows.includes(i)) {
            displayedIndex++;
        }
    }
    return displayedIndex;
    };

    const calculateTotalTime = () => {
        const totalTime = currentlyCooking.reduce(
        (total, recipe) => total + parseFloat(recipe.preparing_time),
            0
        );
    return totalTime;
    };

    const calculateTotalCalories = () => {
        return currentlyCooking.reduce(
        (total, recipe) => total + parseFloat(recipe.calories),
            0
        );
    };

  return (
    <>
      <div className="container w-full md:w-1/3 rounded-xl h-max">
        <div>
            <div className="text-center px-14 pt-5 mb-3">
                <h1 className="font-bold mb-2 text-lg md:text-xl">
                    Want to cook: {selectedRecipes.length - hiddenRows.length}
                </h1>
            <hr />
            </div>
            <table className="text-gray-500 w-full text-left table-auto">
            <thead>
              <tr className="">
                <th className=""></th>
                <th className="">Name</th>
                <th className="">Time</th>
                <th className="">Calories</th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {selectedRecipes.map(
                (recipe, index) =>
                  !hiddenRows.includes(index) && (
                    <tr
                        key={index}
                        className="bg-gray-100 border-b border-gray-200"
                    >
                      <td className="font-bold px-4 py-2 sm:w-0 md:w-auto">
                            {getDisplayedIndex(index)}
                      </td>
                      <td className=" sm:w-0 md:w-auto">{recipe.name}</td>
                      <td className=" sm:w-0 md:w-auto">
                            {recipe.preparing_time}
                      </td>
                      <td className=" sm:w-0 md:w-auto">{recipe.calories}</td>
                      <td className=" w-0 md:w-auto">
                        <div className="block md:hidden">
                          <button
                            onClick={() => handlePreparingButton(index)}
                            className="rounded-full bg-[#0BE58A] text-black py-2 px-2 text-xs w-auto hover:bg-green-500"
                          >
                            <FaHourglassStart />
                          </button>
                        </div>
                        <div className="hidden md:block">
                          <button
                            onClick={() => handlePreparingButton(index)}
                            className="rounded-full text-xs font-normal border-none bg-green-400 text-black py-2 px-3 hover:bg-green-500"
                          >
                            Preparing
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <div className="text-center px-14 pt-5 mb-3">
            <h1 className="font-bold mb-2 text-lg md:text-xl">
              Currently Cooking: {currentlyCooking.length}
            </h1>
            <hr />
          </div>
          <table className="text-gray-500 w-full text-left mb-5">
            <thead>
              <tr className="[&>td]:p-3 text-gray-500 font-bold">
                <td></td>
                <td>Name</td>
                <td>Time</td>
                <td>Calories</td>
              </tr>
            </thead>
            <tbody>
              {currentlyCooking.map((recipe, index) => (
                <tr
                  key={index}
                  className="[&>td]:p-3 [&>td]:my-3 bg-gray-100 border-y"
                >
                  <td className="font-bold">{index + 1}</td>
                  <td>{recipe.name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              ))}
              <tr className="[&>td]:p-3 [&>td]:my-3 [&>td]:font-bold [&>td]:text-sm">
                <td></td>
                <td></td>
                <td>Total Time = {calculateTotalTime()} minutes</td>
                <td>Total Calories = {calculateTotalCalories()} calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Toast Container */}
      {/* <ToastContainer /> */}
    </>
  );
};

Sidebar.propTypes = {
  selectedRecipes: PropTypes.array.isRequired,
};

export default Sidebar;
