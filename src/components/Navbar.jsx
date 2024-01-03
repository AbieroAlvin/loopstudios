import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="mx-auto w-full bg-transparent">
      <nav className="w-full flex justify-between items-center mx-auto max-w-[1080px] py-3 px-4 md:px-0">
        {/* logo */}
        <div className="flex items-center justify-between w-full md:mx-auto">
          <img src={Logo} alt="logo" />
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden flex"
          >
            <AiOutlineMenu size={26} className="text-[var(--White)]" />
          </div>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex justify-between gap-6 text-[14px] font-josefinSans text-[--White]">
            <li className="">
              <a href="#" className="hover:underline underline-offset-8">
                {/* <span className="link link-underline link-underline-black underline-offset-4">
                  About
                </span> */}
                About
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline underline-offset-8">
                Careers
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline underline-offset-8">
                Events
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline underline-offset-8">
                Products
              </a>
            </li>
            <li className="">
              <a href="#" className="hover:underline underline-offset-8">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* side drawer menu */}
        <div
          className={`fixed top-0 w-full h-screen z-10 duration-500 bg-[var(--Black)] ease-in-out py-[20px] px-[10px] ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <nav className="text-[var(--White)]">
            {/* Logo */}
            <div className="flex items-center justify-between w-full md:mx-auto px-4">
              <img src={Logo} alt="logo" />
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer md:hidden flex"
              >
                <AiOutlineClose size={26} />
              </div>
            </div>
            {/* Navigation */}
            <div className="flex items-center">
              <ul className="mt-[6rem] uppercase font-alata flex flex-col gap-6 px-6 text-[1.15rem]">
                <li className="">
                  <a href="#" className="hover:underline underline-offset-8">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline underline-offset-8">
                    Careers
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline underline-offset-8">
                    Events
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline underline-offset-8">
                    Products
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:underline underline-offset-8">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
