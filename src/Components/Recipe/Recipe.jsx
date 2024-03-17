import PropTypes from "prop-types";

const Recipe = ({ recipe }) => {
  const { name, image, description, ingredients, preparing_time, calories } = recipe;
  return (
    <div className="flex">
        <div className="card w-96 bg-base-100 border-2 p-4 shadow-2xl">
          <figure>
            <img className="rounded-2xl w-full h-full"
              src={image}
              alt="food"
            />
          </figure>
          <div className="card-body p-0 pt-6">
            <h2 className="card-title text-xl font-semibold">{name}</h2>
            <p className="text-xs font-normal text-[#878787]"> {description}</p>
            <h2 className="text-[18px] font-semibold">Ingredients: 4</h2>
            <div className="card-actions justify-start">
                <div className="font-normal text-[#878787]">
                <p><li>{ingredients[0]}</li></p>
                <p><li>{ingredients[1]}</li></p>
                <p><li>{ingredients[2]}</li></p>
                <p><li>{ingredients[3]}</li></p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-xs"><i className="fa-regular fa-clock"></i> {preparing_time} minutes</div>
                <div className="text-xs"><i className="fa-solid fa-fire"></i> {calories} calories</div>
                </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-ghost bg-green-400 text-black rounded-3xl">Want to Cook</button>
          </div>
        </div>

    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
