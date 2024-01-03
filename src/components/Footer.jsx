import Logo from "../assets/images/logo.svg";
import {
  FaSquareFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full mx-auto bg-[var(--Black)]">
      <div className="md:flex flex-col gap-12 hidden w-full mx-auto max-w-[1080px]  md:px-0 px-4 py-6">
        <div className="flex justify-between items-center w-full">
          <img src={Logo} alt="logo" />
          <div className="flex gap-8">
            <FaSquareFacebook className="text-[var(--White)] cursor-pointer hover:scale-110" />
            <FaTwitter className="text-[var(--White)] cursor-pointer hover:scale-110" />
            <FaPinterest className="text-[var(--White)] cursor-pointer hover:scale-110" />
            <FaInstagram className="text-[var(--White)] cursor-pointer hover:scale-110" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="">
            <ul className="flex items-center justify-between gap-6 text-[14px] font-josefinSans text-[--White]">
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
          <div>
            <p className="text-[var(--Dark-Gray)] text-[13px]">
              {" "}
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col gap-12 w-full mx-auto px-4 py-6 items-center">
        {/* logo */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        {/* Navigation */}
        <div className="">
          <ul className="flex flex-col items-center justify-between gap-6 text-[14px] font-josefinSans text-[--White]">
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
        {/* icons */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-4">
            <FaSquareFacebook className="text-[var(--White)] cursor-pointer hover:scale-110" />
            <FaTwitter className="text-[var(--White)] cursor-pointer hover:scale-110" />
            <FaPinterest className="text-[var(--White)] cursor-pointer hover:scale-110" />
            <FaInstagram className="text-[var(--White)] cursor-pointer hover:scale-110" />
          </div>
          <div>
            <p className="text-[var(--Dark-Gray)] text-[13px]">
              {" "}
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
