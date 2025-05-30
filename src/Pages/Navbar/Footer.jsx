import { useState } from "react";
import Logo from "../../assets/KimshukaLogoDrk.svg";
import OrngArrow from "../../assets/orngArrow.svg";
import Linkedin from "../../assets/LinkedIngry.svg";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { SERVICES_CONFIG } from "../Services/Services";

const Footer = ({ onSelectService, activeService }) => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    onSelectService(e.target.value);
    // onClose();
  };
  return (
    <footer
      className={`flex flex-col gap-2 w-full pt-[5%] pb-[1%] px-[5%] bg-[#010101]  `}
    >
      <div className="flex flex-col text-lg ">
        <div className="flex justify-evenly py-10 ">
          <div className=" lg:gap-4 w-[95%] flex flex-row sm:gap-2">
            <div className=" w-[15%] flex flex-col">
              <p className="text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2">
                Company
              </p>
              <div className="flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]">
                <Link to="/Home">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    Home
                  </p>
                </Link>
                <Link to="/about">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    About Us
                  </p>
                </Link>
                <Link to="/contact">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    Contact
                  </p>
                </Link>
                <Link to="/blogs">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    Blogs
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-[25%]">
              <p className="text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2">
                Services
              </p>
              <div className="flex flex-col text-[#667085]">
                <ul
                  value={activeService}
                  onClick={handleChange}
                  className="flex flex-col 2xl:gap-6 xl:gap-4"
                >
                  {SERVICES_CONFIG.map((service) => (
                    <div>
                    <li
                      key={service.id}
                      value={service.id}
                      className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                    >
                      {service.name}
                    </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[20%]">
              <p className="text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2">
                Support
              </p>
              <div className="flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]">
                <Link to="/">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    FAQs
                  </p>
                </Link>
                <Link to="/">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    Terms & Conditions
                  </p>
                </Link>
                <Link to="/">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    Privacy Policy
                  </p>
                </Link>
                <Link to="/">
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px]`}
                  >
                    Cookie Policy
                  </p>
                </Link>
              </div>
            </div>
            <div className=" w-[25%]">
              <p className="text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2">
                Reach Us
              </p>
              <div className="flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]">
                <div>
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px] cursor-pointer`}
                  >
                    +91 6366967283
                  </p>
                </div>
                <div>
                  <p
                    className={`${style["footer-link"]} xl:text-lg lg:text-[14px] cursor-pointer`}
                  >
                    498, 12th Cross, Yelahanka Satellite Town, Yelahanka,
                    Bengaluru, Karnataka 560064
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[15%]">
              <p className="text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2">
                Connect With Us
              </p>
              <div
                className="flex flex-col 2xl:gap-6 xl:gap-4 lg:gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {!isHovered ? (
                  <div className="flex gap-2 text-[#667085] cursor-pointer ">
                    <img src={Linkedin} />
                    <p className="xl:text-lg lg:text-[14px]">LinkedIn</p>
                  </div>
                ) : (
                  <div className="flex gap-2 text-[#F27F0C] cursor-pointer">
                    <p className="xl:text-lg lg:text-[14px]">LinkedIn</p>
                    <img src={OrngArrow} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr class="h-[1px] border-0 bg-gradient-to-r from-[#1A1A1A80] via-[#494949] to-[#1A1A1A80] my-2 " />
        <div className=" w-full flex flex-col">
          <h2 className="2xl:text-[7.5rem]  xl:text-[6rem] lg:text-[5rem] md:text-[3.8rem] sm:text-[3.2rem] text-center font-normal bg-gradient-to-b from-[#717171] to-[#50505080] bg-clip-text text-transparent">
            Kimshuka Technologies
          </h2>
          <div className="flex justify-between text-[#717171] text-[18px]">
            <p>@ {currentYear}</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;