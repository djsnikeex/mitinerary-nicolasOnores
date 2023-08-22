import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      className="footer bg-gray-800  py-3 flex flex-col items-center  overflow-hidden  bg-cover bg-center w-full
      "
    >
      <div
        className="relative z-[1] container m-auto px-6 md:px-12 
      "
      >
        <div className="m-auto md:w-full lg:w-full xl:w-full 
        ">
          <div className="flex flex-wrap items-center justify-center md:flex-nowrap  ">
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-4/12 md:justify-start  ">
              <div className=" flex m:w-6/12 justify-center md:justify-start ">
                <ul
                  role="list"
                  className=" flex justify-center items-start flex-wrap w-max"
                >
                  <li>
                    <a
                      href="#"
                      className="flex  space-x-3 p-3 hover:text-indigo-700 transition"
                    >
                      <img
                        src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-la-planete-terre-bleu.png"
                        className="h-6 object-cover object-center"
                        alt="logo"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex justify-start space-x-3 p-3 hover:text-indigo-700 transition"
                    >
                      <img
                        src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
                        className="h-6 object-cover object-center"
                        alt="logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3 p-3 hover:text-indigo-700 transition"
                    >
                      <img
                        src=" 
            https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png
            "
                        className="h-6 object-cover object-center"
                        alt="logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-3  p-3 hover:text-indigo-700 transition"
                    >
                      <img
                        src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png"
                        className="h-6 mx-0 my-0 object-cover object-center"
                        alt="logo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-10/12   text-center sm:text-center sm:w-full flex items-center flex-col border border-gray-700 rounded-md mx-2 my-2">
              <span className="block text-gray-300">
                <span className="font-semibold text-white">
                  🚩Paraná, Argentina
                </span>
              </span>
              <span className="block text-white">
                {" "}
                👨‍💻Nicolás Onores &copy; 2023
              </span>
              <span className="block text-white">
                🎓Cohort 04{" "}
                <a href="#" className="font-semibold text-white">
                  {" "}
                  MERN
                </a>
              </span>
            </div>
            <div className="w-10/12   text-center sm:text-center sm:w-full flex items-center flex-col border border-gray-700 rounded-md 

            
            ">
            <span className="block text-gray-300 text-center">
              <span className="font-semibold text-white ">NAVIGATION</span>
            </span>
            <span className="block  text-gray-300 text-center
            ">
            <Link to="/" className="block hover:text-indigo-700 transition"> Home</Link>
            </span>
            
            <span className="block text-white text-center">
              <Link to="/cities" className="block text-gray-300 text-center hover:text-indigo-700 transition">Cities</Link>
            </span>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
