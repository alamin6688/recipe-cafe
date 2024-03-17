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
            {" "}
            Savor the fusion of flavors and innovation at Recipe Cafe where each
            dish tells a tale of culinary excellence.Recipe Cafe represents the
            culinary symphony in every bite.
          </p>
          <div className="pt-5 space-x-4 lg:space-x-8 mx-auto lg:w-2/3 text-center">
            <button className="border-none bg-green-400 rounded-full font-bold text-sm text-black py-5 px-7 hover:bg-green-500">
              Explore Now
            </button>
            <button className="border-none bg-transparent rounded-full font-bold text-sm text-white py-4 px-6 outline outline-[#4ADE80] hover:outline-green-500">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
