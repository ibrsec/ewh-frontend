"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const JoinedPeople = () => {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(1); // Başlangıç değeri 1
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1, // %10'u görünür olunca tetikler
  });

  useEffect(() => {
    let start = 1; // Animasyon her görünümde 1'den başlasın
    const end = 11240; // Hedef sayı

    if (isVisible) {
      const incrementCounter = () => {
        if (start < end) {
          start += Math.floor(end / 100); // Her adımda sayıyı artır
          setCount(start);
          requestAnimationFrame(incrementCounter); // Animasyonu tekrar çalıştır
        } else {
          setCount(end); // Hedef sayıya ulaşıldığında durdur
        }
      };

      setCount(1); // Her görünümde sıfırla ve baştan başla
      requestAnimationFrame(incrementCounter); // Animasyonu başlat
    }
  }, [isVisible]); // isVisible her değiştiğinde tetiklenir

  return (
    <div
      ref={sectionRef}
      className="relative h-[320px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661414878687-e8c1c0a4a4cf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 filter blur-sm"></div>
      <div className="relative z-10 text-white text-center flex items-center justify-center h-full">
        <div className="h-screen flex items-center justify-center flex-col gap-6 poppins-font px-2">
          <div className="">
            <motion.span
              className="text-light-orange text-5xl sm:text-6xl"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              {count.toLocaleString()} {/* Sayıyı formatla ve göster */}
            </motion.span>
            <span className="text-gray-500 text-lg sm:text-xl">
              kişi ailemize katıldı
            </span>
          </div>
          <div className="">
            <p className="text-md sm:text-lg tracking-wide">
              Kaliteli dil eğitimi ayrıcalık olmaktan çıkıyor.
            </p>
          </div>
          <div className="">
            <button className="primary-button-white">İLETİŞİME GEÇ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedPeople;


// "use client";

// import { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// const JoinedPeople = () => {
//   const sectionRef = useRef(null);
//   const [count, setCount] = useState(1); // Başlangıç değeri 1
//   const isVisible = useIntersectionObserver(sectionRef, {
//     threshold: 0.1, // %10'u görünür olunca tetikler
//   });

//   useEffect(() => {
//     if (isVisible && count === 1) {
//       let start = 1;
//       const end = 9546; // Hedef değer

//       const incrementCounter = () => {
//         // Her 20ms'de bir sayıyı artırarak hedef değere ulaşana kadar devam eder
//         if (start < end) {
//           start += Math.floor(end / 100); // Sayıyı kademeli artır
//           setCount(start);
//           requestAnimationFrame(incrementCounter); // Animasyonu tekrarla
//         } else {
//           setCount(end); // Son değer
//         }
//       };

//       requestAnimationFrame(incrementCounter); // Animasyonu başlat
//     }
//   }, [isVisible, count]);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative h-[320px] bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661414878687-e8c1c0a4a4cf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ')`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-80 filter blur-sm"></div>
//       <div className="relative z-10 text-white text-center flex items-center justify-center h-full">
//         <div className="h-screen flex items-center justify-center flex-col gap-6 poppins-font px-2">
//           <div className="">
//             <motion.span
//               className="text-light-orange text-5xl sm:text-6xl"
//               animate={{ opacity: [0, 1] }}
//               transition={{ duration: 1.5 }}
//             >
//               {count.toLocaleString()} {/* Sayıyı formatlayarak yazdır */}
//             </motion.span>
//             <span className="text-gray-500 text-lg sm:text-xl">
//               kişi ailemize katıldı
//             </span>
//           </div>
//           <div className="">
//             <p className="text-md sm:text-lg tracking-wide">
//               Kaliteli dil eğitimi ayrıcalık olmaktan çıkıyor.
//             </p>
//           </div>
//           <div className="">
//             <button className="primary-button-white">İLETİŞİME GEÇ</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinedPeople;



// const JoinedPeople = () => {
//   return (
//     <div 
//       className="relative h-[320px] bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661414878687-e8c1c0a4a4cf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ')`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-80 filter blur-sm"></div>
//       <div className="relative z-10 text-white text-center flex  items-center justify-center h-full">
//         <div className="h-screen flex items-center justify-center flex-col gap-6 poppins-font px-2">
//           <div className="">
//             <span className="text-light-orange text-5xl sm:text-6xl">9546</span>
//             <span className="text-gray-500 text-lg sm:text-xl">
//               kişi ailemize katıldı
//             </span>
//           </div>
//           <div className="">
//             <p className="text-md sm:text-lg tracking-wide">
//               Kaliteli dil eğitimi ayrıcalık olmaktan çıkıyor.
//             </p>
//           </div>
//           <div className="">
//             <button className="primary-button-white">İLETİŞİME GEÇ</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinedPeople;
