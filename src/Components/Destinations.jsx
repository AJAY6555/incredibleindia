import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Destinations() {
  const [number, Setnumber] = useState(0);
  const photolist = [
    {
      title: "Golden Temple, Amritsar",
      image:
        "https://cdn.pixabay.com/photo/2022/10/07/16/10/golden-temple-7505424_1280.jpg",
    },
    {
      title: "Historic Indian Architecture",
      image:
        "https://cdn.pixabay.com/photo/2022/01/28/08/13/building-6973939_1280.jpg",
    },
    {
      title: "Bihar Temple Heritage",
      image:
        "https://cdn.pixabay.com/photo/2021/11/11/10/19/bihar-6785913_1280.jpg",
    },
    {
      title: "Gateway of India, Mumbai",
      image:
        "https://cdn.pixabay.com/photo/2018/08/13/18/40/gateway-3603678_1280.jpg",
    },
  ];

  let addlist_all_name = photolist[number].title;
  let addlist_all_data = photolist[number].image;

  console.log(photolist);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${addlist_all_data})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "900px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            height: "700px",
            gap: "20px",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          <span  >
        
            <button
              className=" text-red-600"
              onClick={() => Setnumber((prev) => (prev + 1) % photolist.length)}
            >
              <FaArrowLeft />
            </button>
            <span
              style={{ width: "14em", textAlign: "center" }}
              className="   font-bold  p-5 mx-5"
            >
              {addlist_all_name}
            </span>
            <button
              className=" text-red-600"
              onClick={() =>
                Setnumber(
                  (prev) => (prev - 1 + photolist.length) % photolist.length,
                )
              }
            >
              <FaArrowRight />
            </button>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <span
            style={{
              width: "14em",
              textAlign: "center",
              fontSize: "15px",
              fontWeight: "bold",
              backgroundColor: "#ff000f",
            }}
            className="  text-white    py-1 rounded-3xl  "
          >
            Discover more
          </span>
        </div>
      </div>
    </>
  );
}

export default Destinations;
