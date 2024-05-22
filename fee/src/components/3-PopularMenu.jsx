import React from "react";
import Card from "./Card";
import sushi1 from "../assets/images/sushi1.png";
import sushi2 from "../assets/images/sushi2.png";
import sushi3 from "../assets/images/sushi3.png";
import design from "../assets/images/Design.png"

function PopularMenu() {
  return (
    <div id="product" className="bg-[#21243d] h-[680px] w-screen ">
      <img
        src={design}
        alt=""
        className="h-full object-cover w-screen absolute z-0 max-sm:hidden "
      />
      <div className="z-[1] relative">
        <h1 className="text-white font-bold font text-7xl text-center leading-loose max-sm:text-6xl max-sm:pt-[2rem] max-xm:text-4xl">
          POPULAR MENU
        </h1>
        <p className="text-center text-white leading-relaxed font-semibold  text-xl max-sm:text-lg max-sm:pt-[2rem] ">
          we are dedicated to bringing you the finest sushi, crafted with
          traditional techniques and the freshest ingredients
        </p>
        <div className="flex justify-evenly items-center  mt-28">
          <Card
            img={sushi1}
            text="Our chefs are passionate about the art of sushi"
          />
          <Card img={sushi2} text="Each piece of sushi is a work of art" />
          <Card
            img={sushi3}
            text=" Prepared to deliver best dining experience"
          />
        </div>
      </div>
    </div>
  );
}

export default PopularMenu;
