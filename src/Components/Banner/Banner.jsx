import './Banner.css'
const Banner = () => {
    return (
        <div className="container mx-auto mt-8 text-center pt-64">
            <h3 className="text-2xl lg:text-5xl font-bold text-center mb-6 text-white">
                Discover an exceptional cooking <br /> class tailored for you!
            </h3>
            <p className="text-center lg:w-2/3 mx-auto mb-6 text-white">
                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <div className="space-x-4 lg:space-x-8 mx-auto lg:w-2/3 text-center">
                <button className="btn btn-primary border-none bg-green-400 rounded-2xl text-black">
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