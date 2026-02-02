import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Itineraries() {
  const [heritagePlaces] = useState([
    {
      title: "Ancient Temple Aerial View",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/035/978/185/small/ai-generated-ancient-indian-temples-from-bird-eye-view-free-photo.jpg",
      description:
        "Beautiful aerial view showcasing ancient Indian temple architecture surrounded by scenic landscape",
    },
    {
      title: "Hindu Temple Sculptures",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/003/257/478/small/sculptures-on-hindu-temple-photo.jpg",
      description:
        "Detailed stone sculptures on historic Hindu temple walls reflecting rich cultural heritage",
    },
    {
      title: "Bangla Sahib Gurudwara",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/006/914/095/small/bangla-sahib-gurudwara-religious-place-for-sikhs-photo.jpg",
      description:
        "Famous Sikh gurudwara in Delhi known for golden dome and sacred sarovar",
    },
    {
      title: "Sun Temple Modhera",
      image:
        "https://images.pexels.com/photos/34171165/pexels-photo-34171165/free-photo-of-sun-temple-in-modhera-gujarat-india.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Historic Sun Temple in Gujarat displaying intricate carvings and grand stepped tank",
    },
    {
      title: "Pattadakal Temple Complex",
      image:
        "https://images.pexels.com/photos/31969428/pexels-photo-31969428/free-photo-of-historic-temple-complex-in-pattadakal-india.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "UNESCO heritage temple complex in Karnataka blending Dravidian and Nagara architectural styles",
    },
    {
      title: "Khajuraho Temple View",
      image:
        "https://media.gettyimages.com/id/636619254/photo/two-men-at-khajuraho.jpg?s=612x612&w=0&k=20&c=HVBnklkdJhbTB9ZhgLt5u38izXqXOh7mKJtzwVqgnj0=",
      description:
        "Tourists exploring magnificent Khajuraho temples famous for artistic and symbolic carvings",
    },
    {
      title: "Khajuraho Sculpture Art",
      image:
        "https://media.gettyimages.com/id/636619210/photo/an-erotic-sculpture-of-khajuraho.jpg?s=612x612&w=0&k=20&c=kX813g_3KVdIVMS9m4j8-fI233D3PlkaquBL4nKVcMg=",
      description:
        "Intricate stone sculpture at Khajuraho representing artistic excellence and historical craftsmanship",
    },
    {
      title: "Vishwanath Temple Khajuraho",
      image:
        "https://media.gettyimages.com/id/506981498/photo/vishwanath-temple-khajuraho-temples-chhatarpur-district-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=JJjC2y7R2viEW9A6Qw5JyOgsb6CwdAaUZxCVC0yGypk=",
      description:
        "Ancient Vishwanath temple in Khajuraho showcasing towering spires and detailed carvings",
    },
  ]);

  return (
    <>
      <div className=" bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pond5.com/country-india-colorful-and-blurry-footage-141509988_iconl.jpeg")',
          
          height: "100%",
          width: "100%",
        }}
      >
        <div className="relative z-10 flex flex-col items-center text-center  py-[8rem]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-sky-500 tracking-wide">
            ITINERARIES
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg text-sky-400">
            that beckon every traveller
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-5 py-2 border border-gray-400 bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition text-sm sm:text-base font-medium">
              Region ▾
            </button>

            <button className="px-5 py-2 border border-gray-400 bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition text-sm sm:text-base font-medium">
              Interest ▾
            </button>

            <button className="px-5 py-2 border border-gray-400 bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition text-sm sm:text-base font-medium">
              Trip Length ▾
            </button>
          </div>
        </div>
        <div className="relative flex flex-wrap justify-center gap-8">
                  {heritagePlaces.map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -120 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="max-w-sm mx-auto w-[18rem] rounded-lg mb-8 cursor-pointer"
            >
              <div
                className="h-[30rem] bg-cover bg-center"
                style={{
                  borderRadius: "9rem",
                  backgroundImage: `url(${place.image})`,
                }}
              ></div>

              <div className="p-4">
                <h4
                  style={{ textAlign: "center" }}
                  className="text-lg h-[2rem] text-red-600 font-bold"
                >
                  2 day
                </h4>

                <h3
                  style={{ textAlign: "center" }}
                  className="text-lg h-[2rem] text-red-600 font-bold"
                >
                  {place.title}
                </h3>

                <p className="text-lg font-bold text-center">
                  {place.description.split(" ").length > 15
                    ? "....."
                    : place.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      <div className="w-full h-[10rem] flex flex-col items-center justify-center">
  
  {/* Arrows */}
  <div className="flex justify-center gap-6">
    <FaArrowLeft className="text-2xl text-red-600 cursor-pointer" />
    <FaArrowRight className="text-2xl text-red-600 cursor-pointer" />
  </div>

  {/* Button */}
  <div className="mt-6 bg-red-600 text-center font-bold text-lg text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition">
    Discover more
  </div>

</div>

           
      </div>
    </>
  );
}

export default Itineraries;
