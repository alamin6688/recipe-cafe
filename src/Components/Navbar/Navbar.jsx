const Navbar = () => {
  return (
    <div className="mt-2 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] font-normal"
            >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
            </ul>
          </div>
        <a className="btn btn-ghost text-[18px] lg:text-4xl pl-0">
            Recipe Cafe
        </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-normal">
                <li>
                  <a>Home</a>
                </li>
                <li>
                    <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                    <a>Search</a>
                </li>
            </ul>
        </div>
        <div className="navbar-end space-x-2">
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered rounded-3xl w-24 md:w-auto bg-gray-100 border-none" />
        </div>
        <div className="w-10 rounded-full">
          <div>
            <button className="btn rounded-full border-none bg-green-400 text-black">
            <i className="fa-regular fa-user"></i>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
