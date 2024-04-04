import { useState } from "react";


import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export const Header = () => {

    const[ShowMenu, setShowMenu] = useState(false);
  return (
    <header className=" flex fixed justify-between items-center w-full p-4 h-[10vh] z-50
    
    xl:justify-start  ">
        <div className="w-0.5/6  text-center ml-10">
            <a href="#" className="font-bold text-2xl relative p-1 pr-8 mr-9px bg-white ">Power <span className="text-primary text-5xl">.</span><RiCheckboxBlankCircleFill className="absolute -left-2.5 -bottom-3 text-primary -z-10 " /></a>
        </div>
        <nav className={`fixed w-[80%] h-full  ${ShowMenu ? 'left-0' : '-left-full'} right-0 top-0  flex-1 flex justify-center items-center gap-20 flex-col  bg-white transition-all duration-700 z-10 
        
        md:w-[40%]
        xl:static xl:flex-row xl:w-full xl:bg-inherit xl:font-bold`}>
            <a href="#home" className="hover:text-white hover:w-[140px] hover:h-[56px] hover:bg-violet-600 hover:text-center hover:pt-4 hover:place-content-center hover:rounded-full transition-all duration-500 ease-in">
                Home
            </a>
            <a href="#aboutUs" className="hover:text-white hover:w-[140px] hover:h-[56px] hover:bg-violet-600 hover:text-center hover:pt-4 hover:place-content-center hover:rounded-full transition-all duration-500 ease-in">
                About Us
            </a>
            <a href="#services" className="hover:text-white hover:w-[140px] hover:h-[56px] hover:bg-violet-600 hover:text-center hover:pt-4 hover:place-content-center hover:rounded-full transition-all duration-500 ease-in">
                Services
            </a>
            <a href="#" className="hover:text-white hover:w-[140px] hover:h-[56px] hover:bg-violet-600 hover:text-center hover:pt-4 hover:place-content-center hover:rounded-full transition-all duration-500 ease-in">
                Products
            </a>
        </nav>
        <button onClick={() => setShowMenu (!ShowMenu)} className=" xl:hidden text-2xl p-2">{ ShowMenu ? <RxCross2 />:<RiMenu3Line/>}</button>
    </header>
  )
}

 
