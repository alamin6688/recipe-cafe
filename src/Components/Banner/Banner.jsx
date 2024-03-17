import './Banner.css'
const Banner = () => {
    return (
        <div style={{backgroundImage: "url('https://i.postimg.cc/mrX5PGK0/chef-cooking.jpg')"}} className="container text-white p-10 h-[400px] lg:h-[650px] flex items-center justify-center w-[90%] mx-auto">
            <div className='justify-center items-center'>
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
                <button className="btn rounded-2xl text-white border-4">
                    Our Feedback
                </button>
            </div>
            </div>
        </div>
    );
};

export default Banner;