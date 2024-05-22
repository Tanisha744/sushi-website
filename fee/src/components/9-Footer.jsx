import React from "react";
import twitter from "../assets/images/twitter.png"
import whatsapp from "../assets/images/whatsapp.png"
import instagram from "../assets/images/instagram.png"
import facebook from "../assets/images/facebook.png"

function Footer() {
  return (
    <div className="bg-[#111111] h-[350px] w-screen flex items-center  justify-center">
      <div className="flex flex-row items-center justify-center text-center space-y-6 max-w-6xl mx-auto px-4 gap-[6rem]">
        <div className="flex flex-col gap-6">
          <div className="text-white space-y-2  text-left text-xl">
            <p>GET TO KNOW US</p>
            <p>Do review us and get to know more about us</p>
          </div>
          <div className="flex space-x-6  ">
            <img
              src="./src/assets/images/twitter.png"
              alt="Twitter"
              className="h-10 w-10"
            />
            <img
              src="./src/assets/images/whatsapp.png"
              alt="WhatsApp"
              className="h-10 w-10"
            />
            <img
              src="./src/assets/images/instagram.png"
              alt="Instagram"
              className="h-10 w-10"
            />
            <img
              src="./src/assets/images/facebook.png"
              alt="Facebook"
              className="h-10 w-10"
            />
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row md:space-x-12  max-sm:flex max-sm:flex-row">
          <ul className="flex flex-col space-y-2 max-xm:hidden">
            <li className="font-bold">About</li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Brand Guidelines</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2 max-xm:hidden">
            <li className="font-bold">MY ACCOUNT</li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Addresses</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Search Terms</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li className="font-bold">INFORMATIONS</li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Supplies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
