import googleImg from '../assets/google.png';
import airbnbLogo from '../assets/airbnb.png';
import amazonLogo from '../assets/amazon.png';
import shopify from '../assets/shopify.png';

export const Clients = () => {
  return (
   <section className="bg-gray-100 mt-20 p-8 flex flex-col items-center justify-center gap-8 xl:mt-8 ">
        <h1 className='text-2xl font-medium text-gray-800 text-center'>Trusted by gratest companies</h1>
        <div className='flex flex-col items-center flex-wrap gap-20 
        
        md:flex-row'>
            <img src={googleImg} alt="" className='w-40' />
            <img src={airbnbLogo} alt="" className='w-40' />
            <img src={amazonLogo} alt="" className='w-40' />
            <img src={shopify} alt="" className='w-40' />
        </div>
   </section>
  )
}

 
