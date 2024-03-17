import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/gcTZxgzX/miti-q-Yre-P9-QOdrk-unsplash.jpg')",
        }}
        className="banner-container text-white p-10 h-[400px] lg:h-[650px] flex items-center justify-center"
      >
        <div className="space-y-3">
            <h1 className="text-[21px] lg:text-5xl md:text-4xl font-bold text-center">
            Delight in every bite and taste the magic
            </h1>
            <p className="text-center text-sm md:text-[15px] lg:text-lg text-gray-100 md:w-1/2 mx-auto">
                Savor the fusion of flavors and innovation at Recipe Cafe where each
                dish tells a tale of culinary excellence.Recipe Cafe represents the
                culinary symphony in every bite.
            </p>
            <div className="flex justify-center pt-5 space-x-4 lg:space-x-8 mx-auto lg:w-2/3 text-center">
                <button className="btn btn-success border-none bg-green-400 rounded-3xl text-black hover:bg-green-500 outline outline-green-400 px-6">
                    Explore Now
                </button>
                <button className="btn btn-glass ml-0 rounded-3xl text-white border-4">
                    Our Feedback
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
