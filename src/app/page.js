import React from 'react';
import Image from "next/image";
import "./styles.css";
import logo from '../../public/images/Logo.png';
import jubedaparveen from '../../public/images/jubedaparveen.png';
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from '@/app/Component/Footer'



export default function HomeFull() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-1 justify-items-center md:justify-items-center md:mb-[8rem] sm:mb-7">
      <div className="ms-[61rem] mt-16">
        <Image src={logo} width={250} height={250} className="" />
      </div>
      <div className=" ">
        <Image src={jubedaparveen} className="shadow-lg rounded-full" />
      </div>
      <div className=" text-[#c89116] text-3xl mb-4 md:text-md ">
        <h2 className=''>I'm a passionate	&quot; Full Stack Developer	&quot; </h2>
      </div>
      <div className=" text-lg text-[#c89116] rounded-full shadow-lg px-2 py-1 ">
        <ul className="flex space-x-7 ">
          <Link href={'/'}>
            <li className="hover:border-b hover:border-[#7e5508]">Home</li>
          </Link>
          <Link href={'/About'}>
            <li className="hover:border-b hover:border-[#7e5508]">About</li>
          </Link>
          <Link href={'/Resume'}>
            <li className="hover:border-b hover:border-[#7e5508]">Resume</li>
          </Link>
          <Link href={'/Portfolio'}>
            <li className="hover:border-b hover:border-[#7e5508]">Portfolio</li>
          </Link>
          <Link href={'/Services'}>
            <li className="hover:border-b hover:border-[#7e5508]">Services</li>
          </Link>
          <Link href={'/Blogs'}>
            <li className="hover:border-b hover:border-[#7e5508]">Blogs</li>
          </Link>
          <Link href={'/Contact'}>
            <li className="hover:border-b hover:border-[#7e5508]">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="mt-4">
        <ul className="flex space-x-7 ">
          <Link href={'#'}>
            <li className="w-10 h-10 text-lg text-[#c89116] hover:text-[#261a04]  hover:bg-[#c89116] hover:border-[#090601]  border-2 border-[#583d0c] flex justify-center items-center rounded-full"><FaLinkedinIn /></li>
          </Link>
          <Link href={'#'}>
            <li className="w-10 h-10 text-lg text-[#c89116] hover:text-[#261a04]  hover:bg-[#c89116] hover:border-[#090601]  border-2 border-[#583d0c] flex justify-center items-center rounded-full"><FaGithub /></li>
          </Link>
          <Link href={'#'}>
            <li className="w-10 h-10 text-lg text-[#c89116] hover:text-[#261a04]  hover:bg-[#c89116] hover:border-[#090601]  border-2 border-[#583d0c] flex justify-center items-center rounded-full"><FaTwitter /></li>
          </Link>
          <Link href={'#'}>
            <li className="w-10 h-10 text-lg text-[#c89116] hover:text-[#261a04]  hover:bg-[#c89116] hover:border-[#090601]  border-2 border-[#583d0c] flex justify-center items-center rounded-full"><FaFacebook /></li>
          </Link>
          <Link href={'#'}>
            <li className="w-10 h-10 text-lg text-[#c89116] hover:text-[#261a04]  hover:bg-[#c89116] hover:border-[#090601]  border-2 border-[#583d0c] flex justify-center items-center rounded-full"><FaInstagram /></li>
          </Link>
        </ul>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}


{/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  <Image
    className="dark:invert"
    src="/next.svg"
    alt="Next.js logo"
    width={180}
    height={38}
    priority
  />
  <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    <li className="mb-2">
      Get started by editing{" "}
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        src/app/page.js
      </code>
      .
    </li>
    <li>Save and see your changes instantly.</li>
  </ol>

  <div className="flex gap-4 items-center flex-col sm:flex-row">
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Deploy now
    </a>
    <a
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read our docs
    </a>
  </div>
</main>
<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/file.svg"
      alt="File icon"
      width={16}
      height={16}
    />
    Learn
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/window.svg"
      alt="Window icon"
      width={16}
      height={16}
    />
    Examples
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/globe.svg"
      alt="Globe icon"
      width={16}
      height={16}
    />
    Go to nextjs.org →
  </a>
</footer>
</div> */}