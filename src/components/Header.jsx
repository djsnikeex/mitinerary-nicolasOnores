import { Link, Link as LinkRouter } from "react-router-dom";
/* import links from '../utiles/links' */
import useShowMenu from "../utiles/useShowMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { user_logout } from "../store/actions/userActions";

const Header = () => {
  const [showMenu, toggleMenu] = useShowMenu();
  const user = useSelector((store) => store.userReducer.user);

  const defaultPhoto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const dispatch = useDispatch();

  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      dispatch(user_logout());
    } catch (err) {
      console.log(err);
    }
  };

  const [showDropdown, toggleDropdown] = useState(false);

  return (
    <header
      className="bg-gray-800 
    
    "
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left flex  items-center gap-3 text">
            <img
              src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-la-planete-terre-bleu.png"
              className="h-8 object-cover object-center px-3"
              alt="logo"
            />
            <h1 className="text-2xl font-bold text-white-900 sm:text-3xl">
              MyTinary
            </h1>
          </div>

          <div
            className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center
          sm:gap-6
          "
          >
            <button
              className="p-2 border-sky-800 border-[1px] rounded-md"
              onClick={toggleMenu}
            >
              {showMenu ? "Hide menu" : "Show menu"}
            </button>
            {showMenu
              ? links.map((link) => (
                  <LinkRouter
                    key={link.title}
                    to={link.to}
                    className="navbar-linkinline-flex items-center justify-center gap-1.5 rounded-lg border text-center border-gray-200 px-5 py-3 text-white transition hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring"
                  >
                    {" "}
                    {link.title}
                  </LinkRouter>
                ))
              : null}
            {/* <a
              className="flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium justify-center text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              href="#"
            > 
            </a>*/}

            <button
              onClick={() => toggleDropdown(!showDropdown)}
              className="flex items-center gap-2 text-white"
            >
              {showDropdown ? null : user ? (
                <button
                  className="navbar-linkinline-flex items-center justify-center gap-1.5 rounded-lg border text-center border-gray-200 px-5 py-3 text-white transition hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              ) : (
                <LinkRouter
                  to="/signin"
                  className="navbar-linkinline-flex items-center justify-center gap-1.5 rounded-lg border text-center border-gray-200 px-5 py-3 text-white transition hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring"
                >
                  Sign in
                </LinkRouter>
              )}
              {user ? (
                <div className="flex items-center gap-2 border border-indigo-600 rounded-full px-2 py-2 hover:bg-indigo-300 hover:border-indigo-600 transition border-opacity-50 border-double cursor-pointer text-white hover:text-black">
                  <img
                    className="w-[55px] h-[55px] rounded-full object-cover"
                    src={user.image || defaultPhoto}
                    alt=""
                  />
                  <span className="text-bolder">{user.userName}</span>
                </div>
              ) : (
                <>
                  <img
                    className="w-[55px] h-[55px] rounded-full object-cover"
                    src={defaultPhoto}
                    alt=""
                  />
                  <span className="text-bolder"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
