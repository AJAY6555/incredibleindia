import { useState, useEffect, useRef } from 'react';
import "../../src/App.css";

export default function Spin() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [currentNumbers, setCurrentNumbers] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [finalNumbers, setFinalNumbers] = useState([5, 0, 7, 1, 1, 8, 7]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasSpun) {
          setIsSpinning(true);
          setHasSpun(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasSpun]);

  useEffect(() => {
    let interval;
    if (isSpinning) {
      interval = setInterval(() => {
        setCurrentNumbers(prev => prev.map(() => Math.floor(Math.random() * 10)));
      }, 50);

      const timer = setTimeout(() => {
        setIsSpinning(false);
        clearInterval(interval);
        const randomFinal = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));
        setFinalNumbers(randomFinal);
      }, 6000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isSpinning]);

  const displayNumbers = isSpinning ? currentNumbers : finalNumbers;

  return (
 <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
  <div className="flex items-center gap-5 bg-black px-5 py-3 rounded-lg shadow-md">
    
    {/* Number Strip */}
    <div className="flex gap-1">
      {displayNumbers.map((num, idx) => (
        <div
          key={idx}
          className="w-[5vw] h-[7vw] bg-red-600 text-white text-4xl font-bold rounded flex items-center justify-center select-none leading-none"
        >
          {num}
        </div>
      ))}
    </div>

    {/* Label */}
    <div className="text-white text-2xl font-bold max-w-[150px] leading-tight">
      Explorers who've stopped by
    </div>

  </div>
</div>

  );
}
