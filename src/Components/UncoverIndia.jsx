import React, { useEffect, useState } from "react";
import { FaAlignLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft, FaLeftLong, FaRightLeft, FaRightLong } from "react-icons/fa6";

const Images = [
  {
    title: "Kanthalloor",
    url: "https://goldenfernresort.travel.blog/wp-content/uploads/2019/08/goldenfern-plce-4.jpg",
    subtitle: "Kashmir of Kerala",
    State: "📍Kerala"
  },
  {
    title: "Reiek",
    url: "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-hero?qlt=82&ts=1727162177885",
    subtitle: "The home of majestic misty mountains",
    State: "📍Mizoram"
  },
  {
    title: "Sarmoli",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VehdunJHsybTP9fjzM8R09dUruIOIwPf8A&s",
    subtitle: "The enchanting Himalayan haven",
    State: "📍Uttarakhand"
  },
  {
    title: "Dawar",
    url: "https://media-cdn.tripadvisor.com/media/photo-s/13/b2/97/64/some-village-by-the-river.jpg",
    subtitle: "The ancient capital of the dards",
    State: "📍Jammu and Kashmir"
  },
  {
    title: "Madla",
    url: "https://s7ap1.scene7.com/is/image/incredibleindia/madla-village-mp-rural-hero?qlt=82&ts=1726642156796",
    subtitle: "A gateway to nature's abode",
    State: "📍Madhya Pradesh"
  },
];

function UncoverIndia() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const prev = (current - 1 + Images.length) % Images.length;
  const next = (current + 1) % Images.length;

  return (
    
    <>
    

      <div className="text-center mb-10">
        <h1 className="font-medium text-3xl text-gray-300">  Uncover India's</h1>
        <p className="text-7xl font-extrabold text-gray-300">LESSER KNOWN WONDERS</p>
      </div>

    <div className="relative w-full h-[75vh] min-h-[400px] flex justify-center items-center overflow-hidden">
      <Slide img={Images[prev]} position="left" />
      <Slide img={Images[current]} position="center" />
      <Slide img={Images[next]} position="right" />
    </div>

    <div className=" w-52 h-52 m-auto mt-16">
      <div className="flex gap-5 text-4xl w-20 m-auto ">
        <FaArrowLeft className="" onClick={()=>{
          setCurrent((prev) => (prev - 1 + Images.length) % Images.length);
        }}/>
        <FaArrowRight className="" onClick={()=>{
          setCurrent((prev)=>(prev + 1 ) % Images.length)
        }}/> 
      </div>
      <button className="bg-red-600 text-center w-32 h-9 rounded-2xl text-white font-bold text-sm hover:bg-red-500 ml-10 mt-8">Discover more </button>
    </div>
    </>
  );
}

function Slide({ img, position }) {
  const base =
    "absolute h-full rounded-3xl overflow-hidden shadow-2xl transition-transform transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"

  const positions = {    
    left: "w-[50%] -translate-x-[65%] scale-90 opacity-60",
    center: "w-[70%] translate-x-0 scale-100 opacity-100 z-10",
    right: "w-[50%] translate-x-[65%] scale-90 opacity-60",
  };

  return (
      
    <div className={`${base} ${positions[position]}`}>
       <img
        src={img.url}
        alt={img.title}
        className="w-full h-full object-cover"
      />

      {position === "center" && (
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
          <h1 className="text-yellow-400 text-5xl font-bold">
            {img.title}
          </h1>
          <p className="text-white text-lg mt-2">
            {img.subtitle}
          </p>
          <p className="text-white font-medium text-right mt-48">{img.State}</p>
        </div>
      )}
    </div>

  );
}

export default UncoverIndia;



