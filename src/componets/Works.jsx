import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import work4 from '../assets/work4.png';
import work5 from '../assets/work5.png';

export const Works = () => {
  return (
    <div id='aboutUs' className="p-8 xl:p-20">
      <div className='mb-6 text-center'>
        <h1 className="text-[40px] font-black">We create world-glass digital products</h1>
        <p className="text-xl text-gray-500"> By information about design the world to the best instructors, heatc helping By information</p>
      </div>
       {/*work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='flex flex-col gap-2'>
            <img src={work1} alt="" className='w-full h-[600px] object-cover rounded-3xl mb-4 mt' /> 
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold'>App Redesing</h3>
            <p className='text-gray-500'> By information about design the world to the best instructors, heat helping By information about design the world to the best instructors, heatc helping</p>
        </div>
            {/*segunda parte*/}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col gap-4'>
                <img src={work2} alt="" className='w-full rounded-3xl' />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>Redesign channel website landng page</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <img src={work3} alt="" className='w-full rounded-3xl' />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>New Locator App For a New Company</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <img src={work4} alt="" className='w-full rounded-3xl' />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>Rental Rooms Web App Platform</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <img src={work5} alt="" className='w-full rounded-3xl' />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>Calendar App for Big SASS Company</h3>
            </div>
        </div>

      </div>
    </div>
  )
}

 
