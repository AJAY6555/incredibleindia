import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Traveldiaries = () => {
  const [hovered, setHovered] = useState(null);

  const places = [
    {
      title: "Khawnglung Wildlife Sanctuary",
      area: "Lunglei",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/khawnglung-wildlife-sanctuary-lunglei-mizoram-1-attr-nearby?qlt=82&ts=1726665885410",
      description:
        "Lush forest sanctuary in Mizoram known for rich biodiversity, scenic hills, rare wildlife, and trails.",
    },
    {
      title: "Tulip Garden Patnitop",
      area: "Patnitop",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/tulip-garden-patnitop-attr-nearby?qlt=82&ts=1727353616756",
      description:
        "Tulip garden in Patnitop featuring vibrant seasonal blooms, mountain views, cool climate, and walking paths.",
    },
    {
      title: "Hawa Mahal",
      area: "Jaipur",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1742169186274",
      description:
        "Iconic pink sandstone palace in Jaipur famous for intricate windows, history, city views, and architecture.",
    },
    {
      title: "Taj Mahal",
      area: "Agra",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650395114",
      description:
        "World famous white marble mausoleum in Agra symbolizing eternal love, Mughal architecture, symmetry, and gardens.",
    },
    {
      title: "Gateway of India",
      area: "Mumbai",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-1-attr-nearby?qlt=82&ts=1742161972980",
      description:
        "Historic seaside arch monument in Mumbai overlooking Arabian Sea, popular for sunsets, rides, and photography.",
    },
    {
      title: "Sanchi Stupa",
      area: "Sanchi",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/sanchi-stupa-bhopal-madhya-pradesh-1-attr-nearby?qlt=82&ts=1742156048029",
      description:
        "Ancient Buddhist stupa complex near Bhopal showcasing Ashokan heritage, stone carvings, gateways, and spiritual significance.",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center flex flex-col items-center py-16"
      style={{
        backgroundImage:
          'url("https://static.wixstatic.com/media/9aa28b026a5f46c48c031f56070bf2e2.png")',
      }}
    >
      {/* Heading */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        TRAVEL DIARIES
      </h1>

      <div className="text-white mt-2 text-sm sm:text-base tracking-widest">
        ---- for every passion ----
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        <button className="bg-white px-6 py-2 rounded font-bold shadow">
          Interest
        </button>
        <button className="bg-white px-6 py-2 rounded font-bold shadow">
          Regions
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 px-4">
        {places.map((place, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              y: hovered === index ? -120 : 0,
              boxShadow:
                hovered === index
                  ? "0px 20px 40px rgba(0,0,0,0.35)"
                  : "0px 8px 15px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white rounded-xl overflow-hidden w-[280px] sm:w-[300px] md:w-[320px]"
          >
            {/* Image */}
            <div
              className="h-[200px] sm:h-[220px] md:h-[240px] bg-cover bg-center"
              style={{ backgroundImage: `url(${place.image})` }}
            />

            {/* Text Content */}
            <div className="bg-black bg-opacity-80 p-4 text-white h-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 text-sm sm:text-base font-semibold">
                  {place.area}
                </span>
                <span>|</span>
                <span className="text-base sm:text-lg font-bold">
                  {place.title}
                </span>
              </div>

              <p className="text-xs sm:text-sm line-clamp-3">
                {place.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex gap-10 mt-12 text-red-500 text-3xl cursor-pointer">
        <FaArrowLeft />
        <FaArrowRight />
      </div>

      {/* Discover Button */}
      <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition">
        Discover More
      </button>
    </div>
  );
};

export default Traveldiaries;
