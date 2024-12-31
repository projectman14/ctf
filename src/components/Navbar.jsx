import { useState } from "react";
import hacksredflag from "../assets/images/hacksredflag.svg";
import discord from "../assets/images/discord.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="fixed gap-x-[4vw] text-white text-md font-semibold top-0 left-0 flex flex-row w-full z-10">
      {/* Logo */}
      <img src={hacksredflag} className="ml-[2vw] mt-[1vh] h-[6vh] muxsm:h-[4vh] md:h-[6vh]" alt="Logo" />

      <div
        className="ml-auto flex items-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col space-y-[4px] -ml-[2rem] cursor-pointer">
          <span className="block w-[24px] h-[3px] bg-white"></span>
          <span className="block w-[24px] h-[3px] bg-white"></span>
          <span className="block w-[24px] h-[3px] bg-white"></span>
        </div>
      </div>

      <div
        className={`${isOpen ? "block top-[7vh] bg-[#3C9564] py-4 gap-y-4 md:hidden" : "hidden bg-transparent"
          } absolute left-0 w-full flex flex-col items-center md:flex md:flex-row md:static md:justify-between md:w-auto md:gap-x-[4vw] `}
      >
        <div className="relative group">
          <a
            className="ml-[2vw] gap-x-[1rem] text flex items-center justify-center text-center mt-[2vh] h-[5vh] hover:text-white/90 transition-colors muxsm:text-2xl 2xl:text-4xl"
            href="#"
            onMouseEnter={() => setHoveredLink('TEAMS')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            TEAMS
          </a>
          {hoveredLink === 'TEAMS' && (
            <div className="absolute top-full w-auto min-w-[6rem] left-1/2 transform -translate-x-1/2 mt-2">
              <div className="relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2">
                  <div className="absolute w-2 h-2 bg-[#3C9564] rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="relative bg-[#3C9564] backdrop-blur-sm text-white text-xs px-3 py-2 rounded-md shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span>Coming Soon</span>
                    <span className="animate-pulse">✨</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative group ">
          <a
            className="flex items-center justify-center text-center mt-[2vh] h-[5vh] hover:text-white/90 transition-colors muxsm:text-2xl 2xl:text-4xl"
            href="#"
            onMouseEnter={() => setHoveredLink('LEADERBOARD')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            LEADERBOARD
          </a>
          {hoveredLink === 'LEADERBOARD' && (
            <div className="absolute top-full w-auto min-w-[6rem] left-1/2 transform -translate-x-1/2 mt-2">
              <div className="relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2">
                  <div className="absolute w-2 h-2 bg-[#3C9564] rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="relative bg-[#3C9564] backdrop-blur-sm text-white text-xs px-3 py-2 rounded-md shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span>Coming Soon</span>
                    <span className="animate-pulse">✨</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative group">
          <a
            className="flex items-center justify-center text-center mt-[2vh] h-[5vh] hover:text-white/90 transition-colors muxsm:text-2xl 2xl:text-4xl"
            href="#"
            onMouseEnter={() => setHoveredLink('CHALLENGES')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            CHALLENGES
          </a>
          {hoveredLink === 'CHALLENGES' && (
            <div className="absolute top-full w-auto min-w-[6rem] left-1/2 transform -translate-x-1/2 mt-2">
              <div className="relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2">
                  <div className="absolute w-2 h-2 bg-[#3C9564] rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="relative bg-[#3C9564] backdrop-blur-sm text-white text-xs px-3 py-2 rounded-md shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span>Coming Soon</span>
                    <span className="animate-pulse">✨</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative group">
          <a
            className="flex items-center justify-center text-center mt-[2vh] h-[5vh] hover:text-white/90 transition-colors muxsm:text-2xl md:text-2xl  2xl:text-4xl"
            href="#"
            onMouseEnter={() => setHoveredLink('RULES')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            RULES
          </a>
          {hoveredLink === 'RULES' && (
            <div className="absolute top-full w-auto min-w-[6rem] left-1/2 transform -translate-x-1/2 mt-2">
              <div className="relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2">
                  <div className="absolute w-2 h-2 bg-[#3C9564] rotate-45 transform origin-bottom-left"></div>
                </div>
                <div className="relative bg-[#3C9564] backdrop-blur-sm text-white text-xs px-3 py-2 rounded-md shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span>Coming Soon</span>
                    <span className="animate-pulse">✨</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;