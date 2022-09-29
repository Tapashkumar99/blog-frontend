import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <header className="text-purple-900 body-font bg-gray-300" style={{fontWeight:"bold"}}>
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0" href="/">
              <img
                src="https://www.pinclipart.com/picdir/big/47-476312_india-transparent-clipart-indian-flag-logo-png.png"
                alt=""
                className="w-13 h-14 text-white p-2 "
              />
              <span className="ml-3 text-xl">Travel India</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">
                <Link to="/" className="pl-4 pr-2">
                  Home
                </Link>
              </a>
              <a class="mr-5 hover:text-gray-900">
                <Link to="/about" className="pl-2 pr-2">
                  About
                </Link>
              </a>
              <a class="mr-5 hover:text-gray-900">
                <Link to="/articles-List" className="pl-2 pr-2">
                  ArticlesList
                </Link>
              </a>
              <a class="mr-5 hover:text-gray-900"> </a>
            </nav>
          </div>
        </header>
      </div>
      {/* <div
      className="border-b-4 border-blue-500 fixed top-0 w-full bg-blue-500 
    font-bold text-lg text-white"
    >
      <ul className="text-center">
        <li className="inline-block pt-4 pb-4">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/articles-List" className="pl-6 pr-8">
            ArticlesList
          </Link>
        </li>
      </ul>
    </div> */}
    </>
  );
};

export default NavBar;
