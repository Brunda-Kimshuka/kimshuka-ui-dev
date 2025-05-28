import React from "react";
import gradientImg from "../../assets/Gradient.png";
import { Link } from "react-router-dom";


const DropDown = ({ onSelectService, onClose }) => {
  const handleItemClick = (serviceName) => {
    onSelectService(serviceName);
    onClose();
  }
  return (
    <div className="bg-[#FCFAFA] h-[352px] w-[764px] absolute left-0 lg:left-[15%] xl:left-[20%] 2xl:left-[35%] top-20 rounded-2xl flex gap-3 justify-between p-[16px] z-1 border-[#D0D5DD] border-1 shadow-sm (box-shadow: 0px 3px 8px 0 rgb(208 213 221);)">
      <div
        style={{
          backgroundImage: `url(${gradientImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "300px",
          height: "320px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-end",
        }}
        >
        <div className="space-y-2 p-[12px] text-[#FCFAFA]">
          <h1 className="text-[18px]">Need a Custom Solution?</h1>
          <h2>
            Let's build technology tailored to <br /> your business goals.
          </h2>
          <button className="flex gap-[5px]">
            Get In Touch <img src="src/assets/ArrowUpRight.svg" alt="" />{" "}
          </button>
        </div>
      </div>
      <div className="relative">
        <div class="absolute inset-y-0 left-0 right-0 w-[1px] bg-gradient-to-b from-[#E3E3E3] via-[#BCBCBC] to-[#E3E3E3]"></div>
      </div>
      <div className="h-[320px] w-[304px]">
        <ul className="flex flex-col gap-[10px] p-[16px]">
          <li onClick={()=>handleItemClick('APIManagement')} className="hover:bg-[#F27F0C] rounded-md py-2 px-2 transition duration-300 cursor-pointer ">API Management</li>
          <li onClick={()=>handleItemClick('IoTPlatform')} className="hover:bg-[#F27F0C] rounded-md py-2 px-2 transition duration-300 cursor-pointer ">IoT Platform</li>
          <li onClick={()=>handleItemClick('UXServices')} className="hover:bg-[#F27F0C] rounded-md py-2 px-2 transition duration-300 cursor-pointer ">UX Services</li>
          <li onClick={()=>handleItemClick('WebAndAppDevelopment')} className="hover:bg-[#F27F0C] rounded-md py-2 px-2 transition duration-300 cursor-pointer ">Web and App Development</li>
          <li onClick={()=>handleItemClick('ProductConsulting')} className="hover:bg-[#F27F0C] rounded-md py-2 px-2 transition duration-300 cursor-pointer ">Product Consulting</li>
          <li onClick={()=>handleItemClick('TeamAugmentation')} className="hover:bg-[#F27F0C] rounded-md py-2 px-2 transition duration-300 cursor-pointer ">Team Augmentation</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
