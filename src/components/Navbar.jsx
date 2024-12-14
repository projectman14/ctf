import { useState } from "react";
import hacksredflag from "../assets/images/hacksredflag.svg";
import discord from "../assets/images/discord.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="fixed gap-x-[4vw] text-white text-md font-semibold top-0 left-0 flex flex-row w-full z-10">
      {/* Logo */}
      <img src={hacksredflag} className="ml-[2vw] mt-[1vh] h-[6vh]" alt="Logo" />

      <div
        className="ml-auto flex items-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col space-y-[4px] cursor-pointer">
          <span className="block w-[24px] h-[3px] bg-white"></span>
          <span className="block w-[24px] h-[3px] bg-white"></span>
          <span className="block w-[24px] h-[3px] bg-white"></span>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block top-[7vh] bg-slate-600 py-4 gap-y-4" : "hidden bg-transparent"
        } absolute left-0 w-full flex flex-col items-center md:flex md:flex-row md:static md:justify-between md:w-auto md:gap-x-[4vw]`}
      >
        <div className="relative">
          <a 
            className="ml-[2vw] gap-x-[1rem] text flex items-center justify-center text-center mt-[2vh] h-[5vh]" 
            href="#"
            onMouseEnter={() => setHoveredLink('TEAMS')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            TEAMS
          </a>
          {hoveredLink === 'TEAMS' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg z-9">
            Coming Soon
          </div>
          )}
        </div>

        <div className="relative">
          <a 
            className="flex items-center justify-center text-center mt-[2vh] h-[5vh]" 
            href="#"
            onMouseEnter={() => setHoveredLink('LEADERBOARD')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            LEADERBOARD
          </a>
          {hoveredLink === 'LEADERBOARD' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg z-9">
              Coming Soon
            </div>
          )}
        </div>

        <a className="flex items-center justify-center text-center mt-[2vh] h-[5vh]" href="#">
          CHALLENGES
        </a>

        <a className="flex items-center justify-center text-center mt-[2vh] h-[5vh]" href="#">
          RULES
        </a>

        {/* <a className={`${ isOpen
          ? "ml-[5vw]" : "ml-[14vw] pl-[4vw] pt-[0.2vw]"
        } flex items-center justify-center w-[28vw] text-center mt-[2vh] h-[5vh]`} href="#">
          REGISTER &nbsp; / &nbsp; SIGNIN
          <a href="#12">
            <img src={discord} className="ml-[2vw] mt-[1vh] h-[3vh]" alt="Discord" />
          </a>
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;