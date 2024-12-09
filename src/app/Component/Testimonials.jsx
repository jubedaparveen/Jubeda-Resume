import React from 'react'
import Sliders from './Sliders';

const Testimonials = () => {
    return (
        <div>
            <div className=' my-20  space-y-8' data-aos="fade-up" data-aos-duration="12000">
                <div>
                    <h2 className='after:content-[" "] after:w-[12rem] after:h-0.5 after:bg-[#c89116] after:inline-block after:m-[4px_10px] uppercase mb-2'>Testimonials</h2>

                    <Sliders />
                </div>
            </div>

        </div>
    )
}

export default Testimonials;
