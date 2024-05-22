import React from "react";
import logo from "../assets/images/merasushi.png"
import search from "../assets/images/search.png"

function Navbar() {
  return (
    <div>
      <div className=" bg-[#21243d] h-[15vh] flex justify-around items-center gap-10 max-sm:gap-48">
        <div className="flex flex-row justify-center items-center  gap-x-0.5 ">
          <img
            src={logo}
            alt=""
            className="h-[18vh] w-[25vw] max-sm:h-[18vh] max-sm:w-[35vw] "
          />
        </div>

        <ul className="nav-list group flex justify-evenly gap-[2rem] max-sm:hidden">
          <li>
            <p className="text-white text-2xl hover:bg-[#2d3577] p-[11px] ease-in-out duration-300 cursor-pointer rounded-md">
              <a href="#home">Home</a>
            </p>
          </li>
          <li>
            <p className="text-white text-2xl hover:bg-[#2d3577] p-[11px] ease-in-out duration-300 cursor-pointer rounded-md">
              <a href="#product">Product</a>
            </p>
          </li>
          <li>
            <p className="text-white text-2xl hover:bg-[#2d3577] p-[11px] ease-in-out duration-300 cursor-pointer rounded-md">
              <a href="#promo">Promo</a>
            </p>
          </li>
          <li>
            <p className="text-white text-2xl hover:bg-[#2d3577] p-[11px] ease-in-out duration-300 cursor-pointer rounded-md">
              <a href="#about">About</a>
            </p>
          </li>
          <li>
            <p className="text-white text-2xl hover:bg-[#2d3577] p-[11px] ease-in-out duration-300 cursor-pointer rounded-md">
              <a href="#contact">Contact</a>
            </p>
          </li>
        </ul>
        <img
          src={search}
          alt=""
          className="h-[3vh] w-[1.5vw] max-sm:h-[5vh] max-sm:w-[3.5vw] max-xm:w-[7vw]"
        />
      </div>
    </div>
  );
}

export default Navbar;
