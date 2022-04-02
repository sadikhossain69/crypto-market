import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="../../image/pic-1.svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Crypto Market</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <CustomLink to='/home' className="mr-5 hover:text-gray-900">Home</CustomLink>
            <CustomLink to='/coins' className="mr-5 hover:text-gray-900">Coins</CustomLink>
            <CustomLink to='/blog' className="mr-5 hover:text-gray-900">Blog</CustomLink>
            <CustomLink to='/about' className="mr-5 hover:text-gray-900">About</CustomLink>
          </nav>

        </div>
      </div>
    </>
  );
};

export default Header;
