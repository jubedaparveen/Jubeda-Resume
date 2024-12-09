"use client"
import React, { useEffect } from 'react';
import { MdJavascript } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillDetails = [
    { name: 'Html', percentage: '98%' },
    { name: 'CSS3', percentage: '95%' },
    { name: 'JavaScript', percentage: '60%' },
    { name: 'Bootstrap', percentage: '75%' },
    { name: 'Tailwind.CSS', percentage: '80%' },
    { name: 'React.js', percentage: '65%' },
    { name: 'Next.js', percentage: '65%' },
    { name: 'Node.js', percentage: '60%' },
    { name: 'Express.js', percentage: '95%' },
    { name: 'JQuery', percentage: '40%' },
    { name: 'MongoDB', percentage: '60%' },
    { name: 'Mongoose', percentage: '60%' }
];

const Skill = () => {
    useEffect(()=> {
        AOS.init();
    }, [])
    return (
        <div >
            
            <div className='my-20  space-y-8' data-aos="fade-up" data-aos-duration="4000">
                <h2 className='after:content-[" "] after:w-[12rem] after:h-0.5 after:bg-[#c89116] after:inline-block after:m-[4px_10px] uppercase'> Skills </h2>

                <div className='grid md:grid-cols-2 md:gap-10  '>
                    {
                        skillDetails.map((items, i) => (
                            <div key={i}>
                                <div className=" text-[#ebd5a4] font-medium bg-black/60 py-1 px-2 rounded-[10px_10px_9px_9px]">{items.name}</div>
                                <div className=" w-full bg-gray-200 rounded-md h-3" >
                                    <div className='bg-[#725001] h-3 rounded-md text-center text-white text-xs p-[0.1rem] leading-none  transition duration-300 ease-in-o' style={{ width: items.percentage }} > {items.percentage} 
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Skill

{/* <div className="mb-1 text-base font-medium ">Default</div>
<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
  <div className="bg-blue-600 h-2.5 rounded-full w-[45%] text-center text-white text-xs p-0.9 leading-none" > 45% </div>
</div> */}