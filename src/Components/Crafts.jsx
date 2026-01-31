import React, { useRef } from "react";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const box = [
  {
    State: "Assam",
    title: "Muga Silk ",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/muga-silk-assam-craft-popular?qlt=82",
  },
  {
    State: "Bihar",
    title: "Applique - Khatwa Patch Work Of Bihar",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/applique-khatwa-patch-work-bihar-craft-hero?qlt=82&ts=1726641332313",
  },
  {
    State: "Punjab",
    title: "Phulkari ",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/phulkari-1-craft-popular?qlt=82&ts=1726641323700",
  },
  {
    State: "Chhattisgarh",
    title: "Bastar Dhokra",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/bastar-dhokra-bell-metal-dhokra-art-handicraft-chhattisgarh-1-craft-hero?qlt=82&ts=1726641545083",
  },
  {
    State: "Gujarat",
    title: "Patan Patola",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouK_b6tRgv8W2XPCYYfATBM5fSBSdaCYheA&s",
  },
  {
    State: "Jammu and Kashmir",
    title: "Walnut Wood Carving ",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/walnut-wood-carvings-craft-hero?qlt=82&ts=1726641491579",
  },
  {
    State: "Karnataka",
    title: "Channapatna Toys & Dolls ",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/channapatna-toys-and-dolls-Karnataka-1-craft-hero?qlt=82&ts=1726641410733",
  },
  {
    State: "Kerala",
    title: "Aranmala Kannadi",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/aranmula-kannadi-kerala-1-craft-hero?qlt=82&ts=1726641386192",
  },
  {
    State: "Madhya Pradesh",
    title: "Bagh Prints of Madhya Pradesh",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/bagh-prints-of-madhya-pradesh-1-craft-hero?qlt=82&ts=1726641340524",
  },
  {
    State: "Maharashtra",
    title: "Warli Painting ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIZfPh7B5jpKSY5CIvT_ZgzNdC480_PqwhA&s",
  },
  {
    State: "Mizoram",
    title: "Paunchei",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/mizo-puanchei-Mizoram-1-craft-hero?qlt=82&ts=1726641362702",
  },
  {
    State: "Rajasthan",
    title: "Kathputlis ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrqaBa6ShAPD6VDIJh3XPJnhb0jEE_7DSoQ&s",
  },
  {
    State: "Telangana",
    title: "Silver Filigree of Karimnagar",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/Silver-Filigree-of-Karimnagar-1-craft-hero?qlt=82&ts=1726641472613",
  },
  {
    State: "Uttar Pradesh",
    title: "Zardozi Embroidery",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/zardozi-craft-hero?qlt=82&ts=1726674256070",
  },
  {
    State: "Uttarakhand",
    title: "Aipan ",
    img: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnmofGX1IBdonJIuttLQ4po7EZyhhyLgUQg&s",
  },
  {
    State: "West Bengal",
    title: "Santipore Saree ",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/Santipore-Saree-west-bengal-craft-hero?qlt=82&ts=1726641485735",
  },
];

function Crafts() {
  const sliderRef = useRef(null);

  return (
    <div className="h-[200vh] relative ">
      <div className="bg-red-500 h-2/6 absolute w-full">
        <div className="m-auto max-w-fit">
          <h1 className="text-7xl font-extrabold text-white">
            EXQUISITE CRAFTS
          </h1>
          <p className="text-center text-white text-2xl">
            <span>----</span>of timeless tradition<span>----</span>
          </p>
        </div>
      </div>
      <div className="absolute mt-52 w-full z-10 px-20 ">
        <div
          ref={sliderRef}
          className="flex gap-4 scroll-smooth overflow-hidden mt-8 "
        >
          {box.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[280px]  bg-white shadow-lg rounded-lg overflow-hidden  transition-all duration-300 ease-out hover:-translate-y-5 hover:shadow-slate-800"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 bg-gray-200 h-56">
                  <p className="font-bold text-lg text-red-600 mt-3">
                    {item.State}
                  </p>
                  <h2 className="text-2xl mt-5 font-bold">{item.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" absolute w-full mt-[650px] h-[550px]">
        <div className=" w-52 h-52 m-auto mt-16">
          <div className="flex gap-5 text-4xl w-20 m-auto ">
            <FaArrowLeft
              onClick={() => {
                sliderRef.current.scrollLeft -= 300;
              }}
            />
            <FaArrowRight
              onClick={() => {
                sliderRef.current.scrollLeft += 300;
              }}
            />
          </div>
          <button className="bg-red-600 text-center w-32 h-9 rounded-2xl text-white font-bold text-sm hover:bg-red-500 ml-10 mt-8">
            Discover more{" "}
          </button>
        </div>

        <h2 className="text-center text-2xl text-red-600">
          <span className="text-gray-500 mr-2">----</span>Every day a
          <span className="text-gray-500 ml-2">----</span>
        </h2>
        <p className="text-center text-8xl font-extrabold text-red-600">
          CELEBRATION
        </p>
        <div className="w-1/2  m-auto mt-3 h-20 flex">
          <div className="relative w-48 h-10 rounded-3xl bg-gray-300 flex">
            <div className="absulate w-24 text-center h-full rounded-3xl bg-red-600 text-white font-bold text-sm">
              <div className="m-auto py-2">Festivals</div>
            </div>
            <div className="absulate w-24 text-center h-full rounded-3xl font-bold text-sm">
              <div className="m-auto py-2">Events</div>
            </div>
          </div>
          <div className="w-40 border-2 h-10 rounded-lg ml-2 mr-1 flex items-center justify-center">
            <div className="text-center font-semibold text-sm  ">By Month</div>
            <span className="">
              <FaCaretDown />
            </span>
          </div>
          <div className="w-44  h-10 border-2 rounded-lg ml-1 mr-1 flex items-center justify-center">
            <div className="text-center font-semibold text-sm">
              By States & UTs
            </div>
            <span className="">
              <FaCaretDown />
            </span>
          </div>
          <div className="w-44  h-10 border-2 rounded-lg flex items-center justify-center">
            <div className="text-center font-semibold text-sm">
              By Interests
            </div>
            <span className="">
              <FaCaretDown />
            </span>
          </div>
        </div>
        <div className="text-center mt-10 font-bold text-2xl">
          No results found
        </div>
      </div>
    </div>
  );
}

export default Crafts;
