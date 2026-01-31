import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Attractions() {
  const [move, Setmove] = useState(false);
  const places = [
    {
      title: "Gateway of India ",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-1-attr-nearby?qlt=82&ts=1742161972980",
    },
    {
      title: "Khawnglung Wildlife Sanctuary",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/khawnglung-wildlife-sanctuary-lunglei-mizoram-1-attr-nearby?qlt=82&ts=1726665885410",
    },
    {
      title: "Tulip Garden",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/tulip-garden-patnitop-attr-nearby?qlt=82&ts=1727353616756",
    },
    {
      title: "Hawa Mahal",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1742169186274",
    },
   
  ];
  const MOvemuse = (e) => {
    Setmove(e);
  };

  return (
    <div
    className="w-full pb-10 "
    style={{
      minHeight: "100vh",
      backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/27/06/16/hampi-4721762_1280.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical alignment (column me)
        alignItems: "center",
        
      }}
      > 
  
    <div style={{ marginBottom:"4em"}}>

      <div style={{fontSize:"10em",height:"1em", color:"#87CEEB",marginBottom:"35px"}} className="font-bold ">ATTRACTION</div>
  
      <div style={{fontSize:"1.5em",marginBottom:"2em",color:"#87CEEB",textAlign:"center"}} className="text-4xl font-bold " >
        <span>---</span>
        <span>worth a thousand stories</span>
        <span>---</span>
      </div>
      
    </div>  {/* //the change and add animatiom// */}
    <div className="flex justify-center items-center gap-4">
  {places.map((place, index) => (
    
   <motion.div
  key={index}
  onMouseEnter={() => MOvemuse(index)}
  onMouseLeave={() => MOvemuse(null)}
  initial={{ y: 0, boxShadow: "0px 5px 10px rgba(0,0,0,0.2)" }}
  animate={{
    y: move === index ? -80 : 0,
    boxShadow: move === index
      ? "0px 25px 40px rgba(0,0,0,0.45)"
      : "0px 5px 10px rgba(0,0,0,0.2)"
  }}
  transition={{ type: "spring", stiffness: 150 }}
>

      <div
        className="flex justify-center items-end w-[300px] h-[500px] rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${place.img})` }}
      >
        <div
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
            width: "100%",
            height: "190px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{ fontSize: "22px", fontWeight: "bold" }}
            className="text-white text-center"
          >
            {place.title}
          </h1>

          {move === index && (
            <motion.div
              initial={{ y: "3em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{
                backgroundColor: "#ff000f",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "14px",
              }}
              className="w-[9em] h-[1.8em] pt-1 text-white rounded-full mt-2"
            >
              Explore
            </motion.div>
          )}
        </div>
      </div>

    </motion.div>
    
  ))}
</div>

    <div  className="w-[200px] flex justify-center gap-4 mt-4">
      <FaArrowLeft className="text-2xl text-white cursor-pointer  mx-4 " />
      <FaArrowRight className="text-2xl text-white cursor-pointer mx-4 " />
    </div>
    <div  style={{
                backgroundColor: "#ff000f",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }} className="w-[10em] h-[2em] pt-1 text-white rounded-full mt-8 cursor-pointer "> 
      Discover more
    </div>
    </div>
  );
}

export default Attractions;
