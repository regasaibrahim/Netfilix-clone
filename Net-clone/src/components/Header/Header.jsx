import React from "react";
import Netfilixlogo from "../../assets/images/Netfilixlogo.png";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from "@mui/material";


const Header = () => {
  return (
    <>
    <div className="flex flex-row justify-center w-full bg-[#141414] items-center">

      <div className="head">
        <div className=" flex flex-row  text-3xl">
              <img src={Netfilixlogo} alt="" width={100} height={100} />
          <ul className="hidden lg:flex flex-row gap-6 items-center">
            <li className="text-white text-[18px]">
            </li>
            <li className="text-white text-[18px] cursor-pointer">Home</li>
            <li className="text-white text-[18px] cursor-pointer">TVshows</li>
            <li className="text-white text-[18px] cursor-pointer">Movies</li>
            <li className="text-white text-[18px] cursor-pointer">Latest</li>
            <li className="text-white text-[18px] cursor-pointer">My List</li>
            <li className="text-white text-[18px] cursor-pointer">
              Browse by Language
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-6 items-center">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsActiveIcon />
            </li>
            <li className="">
                <Avatar/>
            </li>
            <li className="group relative">
              <ArrowDropDownIcon />
              <div className=" flex-col gap-6  group-hover:flex absolute border-2 border-gray-500  bg-black right-0 hidden rounded-md py-3">
                <span className="cursor-pointer hover:bg-violet-500 w-full px-10 transition-all duration-200">Hello</span>
                <span className="cursor-pointer hover:bg-violet-500 w-full px-10 transition-all duration-200">Hello</span>
                <span className="cursor-pointer hover:bg-violet-500 w-full px-10 transition-all duration-200">Hello</span>
                <span className="cursor-pointer hover:bg-violet-500 w-full px-10 transition-all duration-200">Hello</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
