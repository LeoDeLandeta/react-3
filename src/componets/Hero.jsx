import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import heroImg from '../assets/hero.png';
import figmaLogo from '../assets/figma.png';
import adobeLogo from '../assets/adobe.png';
import sketchLogo from '../assets/sketch.png'

export const Hero = () => {
  return (
   <section id="home" className="min-h-[90vh] pt-5 grid grid-cols-1 
   md:grid-cols-8  p-8
    xl:pt-20">
         {/* information */ }
    <div className=" md:col-span-5 flex items-center justify-center p-12">
       <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-bold leading-[7rem]">Web Desing Impactful Digital <span className="text-primary p-2 border-8 border-primary relative">Products
            <RiCheckboxBlankCircleFill className="text-lg absolute -left-3 -top-3  text-white ring-8 ring-primary rounded-full" />
            <RiCheckboxBlankCircleFill className="text-lg absolute -right-4 -top-3  text-white ring-8 ring-primary rounded-full" />
            <RiCheckboxBlankCircleFill className="text-lg absolute -right-4 top-49  text-white ring-8 ring-primary rounded-full" />
            <RiCheckboxBlankCircleFill className="text-lg absolute -left-3 top-49  text-white ring-8 ring-primary rounded-full" />
            </span></h1>
            <p className="text-gray-500 text-2xl leading-[2.5rems]">Help find solutions with intuitive and in accordance with cient business goals.We provide a higt-quality services.</p>
            <div className=" flex flex-col md:flex-row  items-center gap-4" >
             <button className="bg-primary text-white py-2 px-8 rounded-lg text-xl">
                Contact Us
            </button>
            <button className=" flex items-center gap-4  py-2 px-8 rounded-lg text-xl text-left">
            <FaPlay className="bg-secundary text-primary p-4 box-content rounded-full"/> Watch our <br /> introduction video
            </button>
            </div>
        </div>    
    </div>
    {/*imagen */}
    <div className=" md:col-span-3 flex items-center justify-center relative z-1 pt-8">
        {/* content image */}

        <div>
           <img src={heroImg} alt="" className="w-[450px] h-[450px] object-cover -mt-20" />
         
                <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center max-w-[250px] mx-auto">
                <div className="flex items-center">
                    <img
                src="https://img.freepik.com/   foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 "
                     />
                     <img
                src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                     />
                        <img
                src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                     />
                     
                     <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4  bg-white"
                      />
                      <img
                src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4  bg-white"
                      />

                    </div>
                
              <h2 className="text-xl font-bold gap-2 tracking-[2px] text-gray-800">120 + employees</h2>
                <div className="flex items-center gap-2 text-lg text-gray-500">
                <IoIosStar className="text-primary" />5.0 (3.1k Reviews)
                </div>
                <div className="absolute -right-12 -bottom-14 -z-10">
                    <RiCheckboxBlankCircleFill className=" text-primary text-9xl " />
                </div>
            </div>
           </div>
           {/* circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/*logos */}

        <img src={figmaLogo} alt="" className="w-20 h-20 object-cover rounded-full border-l-8 border-gray-500 absolute top-[1%] right-[10%] mt-[5%] rotate-12" />
        <img src={adobeLogo} alt="" className="w-20 h-20 object-cover rounded-full border-l-8 border-black absolute top-[1%] left-[10%]" />
        <img src={sketchLogo} alt="" className="w-20 h-20 object-cover rounded-full  absolute bottom-[5%] left-[10%] bg-white -rotate-12" />
    </div>
   </section>
  )
}


