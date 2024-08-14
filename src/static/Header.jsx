import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-white  px-4 lg:px-6 py-2.5 border-b-[1px] border-gray-200 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              <nav className="flex items-center">
                <img
                  src="./rccg-for-web.png"
                  className="mr-1 h-12 "
                  alt="RCCG Logo"
                />
                {/* <span className="self-center text-xl font-bold whitespace-nowrap ">
                UGC
              </span> */}
              </nav>
            </Link>
            <div className="flex items-center lg:order-2">
              {/* <a
                href="#"
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                Log in
              </a> */}
              <Link to="/membershipform">
                <nav className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">
                  Fill Membership Form
                </nav>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
