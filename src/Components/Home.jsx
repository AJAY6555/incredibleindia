import React, { useEffect, useRef, useState } from "react";

const FirstHomePage = () => {
  const videolist = [
    {
      title: "Beautiful Nature River",
      url: "https://cdn.pixabay.com/video/2024/02/09/199956-911694856_large.mp4",
      description: "A peaceful river flowing through lush greenery — perfect for travel background.",
    },
    {
      title: "Waves at Sunset Beach",
      url: "https://cdn.pixabay.com/video/2022/11/15/139178-771796365_large.mp4",
      description: "Calming beach waves with golden sunset — ideal for relaxing scenes.",
    },
    {
      title: "Forest Walk Path",
      url: "https://cdn.pixabay.com/video/2022/09/28/132867-755379248_large.mp4",
      description: "Scenic walking path inside a forest — great for nature-themed video sections.",
    },
    {
      title: "City Timelapse Lights",
      url: "https://cdn.pixabay.com/video/2024/04/01/206414_large.mp4",
      description: "Fast-paced city lights timelapse — perfect for dynamic app sections.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);

  // Auto change video
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % videolist.length);
        setFade(true);
      }, 1000); // same as CSS fade duration
    }, 6000);

    return () => clearInterval(interval);
  }, [videolist.length]);

  // Restart video on change
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [index]);

  return (
    <div className="relative w-full  h-screen overflow-hidden left-1/2 -translate-x-1/2">
      {/* Background Video */}
      <video
        key={index}
        ref={videoRef}
        src={videolist[index].url}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {videolist[index].title}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl drop-shadow-md">
          {videolist[index].description}
        </p>
      </div>
    </div>
  );
};

export default FirstHomePage;
