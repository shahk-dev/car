import React from "react";
import { NavLink } from "react-router-dom";
import Filter from "../assets/logs/filter.svg";
import gul from "../assets/logs/gul.svg";
import search from "../assets/logs/search.svg";
import heart from "../assets/logs/heart.svg";
import setting from "../assets/logs/setting.svg";
import notification from "../assets/logs/notification.svg";

function Navbar() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between w-full p-6.5 px-14">
        <div className="flex items-center gap-16">
              <a
          className="font-[Plus_Jakarta_Sans] text-[32px] font-bold text-[#3563E9]"
          href="/"
        >
          MORENT
        </a>
        <div className="w-[510px] h-[44px] border-gray-600 rounded-[70px] border gap-3.5 flex items-center px-6 justify-center">
          <img src={search} alt="search" />
          <input
            className="h-[43px] w-full text-md outline-none"
            type="text"
            placeholder="Search something here "
          />
          <img src={Filter} alt="filter" />
        </div>
        </div>
        <nav className="flex items-center gap-5 ">
          <NavLink className={'h-[44px] w-[44px] border border-gray-400 rounded-full flex items-center justify-center'} to={"/bylike"}><img src={heart} alt="ds" /></NavLink>
          <NavLink className={'h-[44px] w-[44px] border border-gray-400 rounded-full flex items-center justify-center'} to={"/notification"}><img src={notification} alt="ds" /></NavLink>
          <NavLink className={'h-[44px] w-[44px] border border-gray-400 rounded-full flex items-center justify-center'} to={"/settings"}><img src={setting} alt="ds" /></NavLink>
          <NavLink className={'h-[44px] w-[44px] border border-gray-400 rounded-full flex items-center justify-center'} to={"/user"}><img src={gul} alt="ds" /></NavLink>
        </nav>
      </header>
       <hr className="border-0 border-b border-b-gray-200" />
    </div>
  );
}

export default Navbar;
