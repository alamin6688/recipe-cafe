import './Banner.css'
const Banner = () => {
    return (
        <div className="container w-[90%] lg:w-full mx-auto mt-8 mb-24 text-center pt-64">
            <h3 className="text-2xl lg:text-5xl font-bold text-center mb-6 text-white">
                Delight in every bite and taste the magic
            </h3>
            <p className="text-center lg:w-2/3 mx-auto mb-6 text-white">
                Savor the fusion of flavors and innovation at Recipe Cafe where each dish tells a tale of culinary excellence.Recipe Cafe represents the culinary symphony in every bite.
            </p>
            <div className="space-x-4 lg:space-x-8 mx-auto lg:w-2/3 text-center">
                <button className="btn btn-success border-none bg-green-400 rounded-2xl text-black">
                    Explore Now
                </button>
                <button className="btn rounded-2xl text-black">
                    Our Feedback
                </button>
            </div>
        </div>
    );
};

export default Banner;