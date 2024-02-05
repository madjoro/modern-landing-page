import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggleNav, settoggleNav] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"></img>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, i) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggleNav((prev) => !prev)}
        />
        <div
          className={`${
            toggleNav ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
