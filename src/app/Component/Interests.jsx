"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineDirectionsBike } from "react-icons/md";
import { GiDutchBike } from "react-icons/gi";
import { SiWpexplorer } from "react-icons/si";
import { PiMountainsFill } from "react-icons/pi";
import { RiSketching } from "react-icons/ri";
import { MdCameraswitch } from "react-icons/md";



const InterestsDetails = [
    { name: 'Bike Riding', icon:<MdOutlineDirectionsBike size={22} /> },
    { name: 'Travelling', icon:<GiDutchBike size={24} /> },
    { name: 'Learn New Things', icon:<SiWpexplorer size={21} /> },
    { name: 'Mountaining', icon:<PiMountainsFill size={22} /> },
    { name: 'Sketching', icon:<RiSketching size={22} /> },
    { name: 'Photography', icon:<MdCameraswitch size={22} /> },



];

const Interests = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        // 
        <div>
            <div className='my-20 space-y-8 ' data-aos="fade-up" data-aos-duration="8000">
                <h2 className='after:content-[" "] after:w-[12rem] after:h-0.5 after:bg-[#c89116] after:inline-block after:m-[4px_10px] uppercase'> Interests </h2>
                <div className='grid md:grid-cols-4 md:gap-5 '>
                    {
                        InterestsDetails.map((items, i) =>(
                            <div key={i} className='flex gap-3 justify-center text-[#ebd5a4] text-lg hover:bg-slate-800/30 bg-black/60 border border-slate-900 px-3 py-6 uppercase rounded-sm  text-center'>
                        <div>{items.icon}</div>
                        <div>{items.name}</div>
                    </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Interests
