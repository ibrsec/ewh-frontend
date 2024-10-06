"use client";
import Link from "next/link";
// import {   useState } from 'react';

import { GrInstagram } from "react-icons/gr";

// const textItems = [
//     "Fluent English",
//     "Speak Confidently",
//     "Global Access",
//     "Start Learning",
//     "Boost Your Career",
//     "Join Us Now",
//     "Master English",
//     "Learn Fast",
//     "Speak Fluently",
//     "Grow with English",
//     "Unlock Success",
//     "Achieve More",
//     "Interactive Learning",
//     "Native Tutors",
//     "24/7 Access",
//     "Real Progress",
//     "Learn & Thrive",
//     "Seamless Learning"
//   ];


const SlidingText = () => {
  // const [isVisible, setIsVisible] = useState(false);
 

  return (
    <section
      className={`bg-black text-white py-14 px-10 my-16`}
    >
      <div className="text-center text-md geist-font   overflow-hidden">
      <div className="sliding-text flex items-center gap-9">
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60].map((item, index) => (
          <Link href="https://www.instagram.com/english.with.hatice/" target="_blank" key={index} className='text-nowrap mx-4 flex items-center  gap-2 hover:text-yellow transition-all duration-500'>
            <GrInstagram className="text-xl"/> english.with.hatice
            {/* <span className=""></span> */}
            {/* {item} */}
          </Link>
        ))}
        {/* {textItems.map((item, index) => (
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
          ))} */}
        </div>
        </div>
    </section>
  );
} 

export default SlidingText;
