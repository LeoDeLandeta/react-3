import { IoMdMail } from "react-icons/io";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

export const Services = () => {
  return (
    <div id="services" className="grid grid-cols-1 gap-8 p-8
    md:grid-cols-2 md:gap-20 mdp-12 xl:p-20 ">
     <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">How we can help</h1>
        <p className="text-[20px] text-gray-500">Follow our newsletter. We will regulary update our latest project and availability.</p>
        <form action="" className="w-full">
            <div className="relative">
            <IoMdMail className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input type="text" 
            className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
            placeholder="Enter your email address"/>
            <button type="submit" className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2 transition-all duration-500
            hover:bg-gray-100 hover:text-primary hover:underline hover:border-solid hover:border-2 hover:border-primary">
                Submit
            </button>
            </div>
        </form>
     </div>
     {/*Sercivies */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
            <MdOutlinePhonelinkRing className="text-4xl p-2 bg-secundary box-content text-primary rounded-xl"/>
            <h3 className="text-[20px] font-bold">UI/UX Desing</h3>
            <p className="text-gray-500">Sometimes features require a short description</p>
            </div>
            <div className="flex flex-col gap-2">
            <RiComputerFill className="text-4xl p-2 bg-secundary box-content text-primary rounded-xl"/>
            <h3 className="text-[20px] font-bold">UI/UX Desing</h3>
            <p className="text-gray-500">Sometimes features require a short description</p>
            </div>
            <div className="flex flex-col gap-2">
            <MdOutlinePhonelinkRing className="text-4xl p-2 bg-secundary box-content text-primary rounded-xl"/>
            <h3 className="text-[20px] font-bold">Logo Branding</h3>
            <p className="text-gray-500">Sometimes features require a short description</p>
            </div>
            <div className="flex flex-col gap-2">
            <RiComputerFill className="text-4xl p-2 bg-secundary box-content text-primary rounded-xl"/>
            <h3 className="text-[20px] font-bold">UI/UX Desing</h3>
            <p className="text-gray-500">Sometimes features require a short description</p>
            </div>
     </div>
    </div>
  )
}

 
