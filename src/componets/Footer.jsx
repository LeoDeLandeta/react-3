import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer id="product" className="bg-footer p-8 xl:p-20">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-500 pb-8 md:flex-row">
            {/*Logo */}
            <div className="w-1/6">
                <a href="#" className="text-2xl font-bold relative p-1 bg-footer text-white">
                    Power <span className="text-primary text-5xl">.</span>{" "}
                </a>
            </div>
            {/*social media */}
            <nav className="flex items-center gap-4">
                <a href="#" className="block text-white p-4 bg-primary rounded-full transition-all duration-500 hover:bg-white hover:text-primary hover:border-solid hover:border-2 hover:border-primary">
                    {" "}
                    <RiInstagramLine />{" "}
                </a>
                <a href="#" className="block text-white p-4 bg-primary rounded-full transition-all duration-500 hover:bg-white hover:text-primary hover:border-solid hover:border-2 hover:border-primary">
                    {" "}
                    <RiFacebookLine />{" "}
                </a>
                <a href="#" className="block text-white p-4 bg-primary rounded-full transition-all duration-500 hover:bg-white hover:text-primary hover:border-solid hover:border-2 hover:border-primary">
                    {" "}
                    <RiTwitterLine />{" "}
                </a>
                <a href="#" className="block text-white p-4 bg-primary rounded-full transition-all duration-500 hover:bg-white hover:text-primary hover:border-solid hover:border-2 hover:border-primary">
                    {" "}
                    <RiGithubLine />{" "}
                </a>
            </nav>
        </div>

        <div className="mt-8">
            <h3 className="text-lg font-bold text-white text-center md:text-left">Company</h3>

            <nav className="mt-4 flex flex-col items-center justify-between gap-4
            md:flex-row">
                <a href="#" className="text-gray-300  transition-colors mt-4 hover:text-white hover:underline">
                    About Us
                </a>
                <a href="#" className="text-gray-300  transition-colors mt-4 hover:text-white hover:underline">
                    Press
                </a>
                <a href="#" className="text-gray-300  transition-colors mt-4 hover:text-white hover:underline">
                    Investors
                </a>
                <a href="#" className="text-gray-300  transition-colors mt-4 hover:text-white hover:underline">
                   event´s
                </a>
                <a href="#" className="text-gray-300  transition-colors mt-4 hover:text-white hover:underline">
                    Terms of use
                </a>
                <a href="#" className="text-gray-300  transition-colors mt-4 hover:text-white hover:underline">
                    Privacy policy
                </a>
                <button 
                type="button"
                className="font-semibold py-2 px-6 bg-primary text-white rounded-xl transition-all duration-700 hover:bg-gray-100 hover:text-primary hover:underline hover:border-solid hover:border-2 hover:border-primary">
                    Contact Us
                </button>
            </nav>
        </div>
        
        <div className="mt-20">
            <p className="text-gray-300 text-center">© Leonardo 2024 - All Rights Reserved</p>
        </div>
    </footer>
  )
}

 
