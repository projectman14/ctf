import '../index.css';
import flag from "../assets/images/flag.svg";
const HacksFlag = () => {
  return (
<>
<div className="h-[19vh] top-[32vh] w-full flex flex-row justify-between gap-x-[4vw] items-center px-[9.5vw] bg-cover bg-center overflow-hidden object-cover relative">

      <img src={flag} className="h-full flex w-[10vw] ml-[0rem]" alt="Left Flag" />

      <h1 className="text-white font-semibold flex text-[12vw] mb-[2vw] ml-[3vw] text-shadow font-Pixeboy">hacks/ctf</h1>
      
      <img src={flag} className="h-full ml-[7vw] w-[10vw] " alt="Right Flag" />
      
</div>
</>
    
  )
}

export default HacksFlag