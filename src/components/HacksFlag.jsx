
import '../index.css';
import flag from "../assets/images/flag.svg";

const HacksFlag = () => {
  return (
    <div className="h-[19vh] min-h-[19rem] top-[20vh] w-full flex justify-center items-center px-[9.5vw] bg-cover bg-center overflow-hidden object-cover relative muxsm:gap-[1rem]  ">
      {/* Left flag */}
      <img
        src={flag}
        className="h-[10vw] animate-flag-wave "
        alt="Left Flag"
      />

      {/* Text */}
      <h1 className="text-white font-semibold text-[12vw] text-shadow font-Pixeboy select-none animate-text-pulse">
        HACKS/CTF
      </h1>

      {/* Right flag */}
      <img
        src={flag}
        className="h-[10vw] animate-flag-wave"
        alt="Right Flag"
      />
    </div>
  );
};

export default HacksFlag;