"use client"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'), { ssr: false });


const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Jubeda Parveen",
      img: "/public/images/jubedaparveen.png",
      work: "Web Developer",
      bio: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      id: 2,
      title: "Jubeda Parveen",
      img: "/public/images/jubedapic.jpg",
      work: "Web Developer",
      bio: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      id: 3,
      title: "Jubeda Parveen",
      img: "/public/images/jubedapic.jpg",
      work: "Web Developer",
      bio: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      id: 4,
      title: "Jubeda Parveen",
      img: "/public/images/jubedapic.jpg",
      work: "Web Developer",
      bio: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      id: 5,
      title: "Jubeda Parveen",
      img: "/public/images/jubedapic.png",
      work: "Web Developer",
      bio: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
  ];

  return (
    
    <div className="h-screen  items-center pt-20">
      <div className="max-w-screen mx-auto">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="px-4 relative">
              <div className="bg-black/60 p-10 rounded-[0rem_10rem_0rem_13rem] shadow-lg shadow-emerald-100 ">
                <span className="text-slate-100 absolute overflow-visible top-1 right-[19.9rem] text-center text-5xl w-14 px-2 shadow-lg shadow-yellow-50 rounded-full">
                  {slide.id}
                </span>
                <br />
                <br />
                <p className="text-justify text-l text-slate-100 overflow-visible">
                  <FaQuoteLeft className="inline mx-2" /> {slide.bio}{" "}
                  <FaQuoteRight className="inline ms-2" />
                </p>
                <div className="overflow-visible absolute left-[19rem]">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    className="w-20 h-20 rounded-full object-cover border-4 shadow-lg  shadow-yellow-200"/>
                </div>
                <div className="text-center rounded-full shadow-lg shadow-yellow-50">
                  <h3 className="text-lg font-medium mt-4  text-slate-300">
                    {slide.title}
                  </h3>
                  <p className=" text-slate-300  ">{slide.work}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
