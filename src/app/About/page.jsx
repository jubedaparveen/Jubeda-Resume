import Navbar from '@/app/Component/Navbar';
import Footer from '@/app/Component/Footer';
import Link from 'next/link';
import '@/app/globals.css';
import React from 'react';
import Image from 'next/image';
import jubedapic from '../../../public/images/jubedapic.png';
import { MdArrowForwardIos } from "react-icons/md";
import Skill from '../Component/Skill';
import Interests from '../Component/Interests';
import Testimonials from '../Component/Testimonials';
import Testimo from '../Component/Testimo';
// import ImageSlider from '../Component/ImageSlider';
import Sliders from '../Component/Sliders';


// const BioInformation = [
//   { name: , 
//     Discription1: ,
//     Discription2: ,

//   },
// ];

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className=' max-w-screen-xl text-[#c89116] bg-black/50 font-bold tracking-wider mx-auto  border-gray-800 my-3 p-12 '>
        <div>
          <h2 className='after:content-[" "] after:w-[12rem] after:h-0.5 after:bg-[#c89116] after:inline-block after:m-[4px_10px] uppercase mb-2'>About</h2>
          <p className='uppercase md:text-4xl text-xl'>Learn more about me</p>
        </div>

        <div className='grid md:grid-cols-3 gap-10 mt-8'>
          <div className='md:col-span-2  '>
            <h2 className='text-2xl tracking-wider uppercase '>I'm a passionate	&quot; Full Stack Developer	&quot;</h2>
            <p className='md:indent-[6rem] leading-7  mt-6 text-[#ebd5a4] text-justify tracking-wider'>"Full-Stack Developer [ MERN Stack ]  |  HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB | UI/UX Enthusiast & Problem Solver" | Search Engine Optimization | Content Writer |</p>

            <div className='grid md:grid-cols-2 my-8'>
              <div >
                <ul className='space-y-2 tracking-widest'>
                  <li>
                    <MdArrowForwardIos size={14} className='inline me-2 mb-1' />
                    <strong className=''>Website : </strong>
                    <span>www.jubedaparveen.com</span>
                  </li>
                  <li>
                    <MdArrowForwardIos size={14} className='inline me-2 mb-1' />
                    <strong>Phone : </strong>
                    <span>+123 456 7890</span>
                  </li>
                  <li>
                    <MdArrowForwardIos size={14} className='inline me-2 mb-1' />
                    <strong>City : </strong>
                    <span>Indore , Mhow (Madhya Pradesh)</span>
                  </li>
                </ul>
              </div>
              <div className='mt-3'>
                <ul className=' space-y-2 '>
                  <li>
                    <MdArrowForwardIos size={14} className='inline me-2 mb-1' />
                    <strong className=''>Education : </strong>
                    <span>Master in Science</span>
                  </li>
                  <li>
                    <MdArrowForwardIos size={14} className='inline me-2 mb-1' />
                    <strong className=''>Email Id : </strong>
                    <span>jubedaparveenh@gmail.com</span>
                  </li>
                  <li>
                    <MdArrowForwardIos size={14} className='inline me-2 mb-1' />
                    <strong>Freelance : </strong>
                    <span>Working</span>
                  </li>
                </ul>
              </div>

            </div>
            <p className='leading-7 text-[#ebd5a4] tracking-wider text-justify 
            // first-line:uppercas 
            // first-line:tracking-widest 
            first-letter:text-8xl 
            first-letter:font-bold 
            first-letter:text-text-[#d7ba7a] first-letter:me-3 
            first-letter:float-start'>As a dedicated Full-Stack Developer with a year of experience, I specialize in building dynamic, client-focused web applications. My skill set includes HTML5, CSS3, JavaScript, Bootstrap, jQuery, Tailwind CSS, Next.js,  React.js, Node.js, Express.js, and MongoDB. I excel in creating responsive and user-friendly interfaces while ensuring robust backend functionality. With a commitment to delivering high-quality solutions and a keen eye for detail, I aim to exceed client expectations and drive business success. Let's connect to discuss how I can bring value to your next project.</p>

          </div>
          <div className='hidden md:block overflow-hidden p-2'>
            <Image src={jubedapic} />
          </div>
        </div>

        <Skill />
        <Interests />
        <Testimonials />
        {/* <Testimo /> */}
        {/* <Sliders /> */}
        {/* <div className="min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold text-center mt-8">React Slider</h1>
          <ImageSlider />
        </div> */}
      </div>



      <Footer />
    </div>
  )
}

export default Page;




