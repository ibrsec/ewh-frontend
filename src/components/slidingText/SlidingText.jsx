"use client";
import { useEffect, useState } from 'react';

const textItems = [
    "Fluent English",
    "Speak Confidently",
    "Global Access",
    "Start Learning",
    "Boost Your Career",
    "Join Us Now",
    "Master English",
    "Learn Fast",
    "Speak Fluently",
    "Grow with English",
    "Unlock Success",
    "Achieve More",
    "Interactive Learning",
    "Native Tutors",
    "24/7 Access",
    "Real Progress",
    "Learn & Thrive",
    "Seamless Learning"
  ];


const SlidingText = () => {
  const [isVisible, setIsVisible] = useState(false);
 

  return (
    <section
      className={`bg-black text-white py-10 px-10 `}
    >
      <div className="text-center text-md geist-font   overflow-hidden">
      <div className="sliding-text">
        {textItems.map((item, index) => (
          <span key={index} className='text-nowrap mx-4'>
            {item}
          </span>
        ))}
        {textItems.map((item, index) => (
            <span key={`copy-${index}`} className='text-nowrap m-4'>
              {item}
            </span>
          ))}
        {textItems.map((item, index) => (
            <span key={`copy2-${index}`} className='text-nowrap m-4'>
              {item}
            </span>
          ))}
        </div>
        </div>
    </section>
  );
} 

export default SlidingText;
