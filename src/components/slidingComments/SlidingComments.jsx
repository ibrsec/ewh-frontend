"use client";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";


const slides = [
  { content: "A2 seviyesinden C1 seviyesine gelmek benim için bir hayaldi, ama yaklaşık 9 ayda bu hayalim gerçekleşti. Sizin disiplininiz ve profesyonelliğiniz olmasaydı bunu nasıl başarırdım bilemiyorum. Tek diyebileceğim şey: İyi ki varsınız, hocam! 😊", author: "AHMET C" },
  { content: "İyi ki size o maili atmış ve sizinle bu yola çıkmışım. Birçok İngilizce hocasından ders almış olmama rağmen İngilizceyi konuşabilmem sizin eseriniz. Bu zamana kadar anlamadığım yerleri nokta atışıyla anlatışınız sayesinde sağlam adımlarla acele etmeden ilerliyorum. Samimi ve içten işlediğiniz dersler, ders saatlerinin esnek olması ve daha birçok şey için kalpten binlerce kez teşekkür ederim. İyi ki bu yola sizinle çıktım. ❣️", author: "ECEM T" },
  { content: "Hocam, öncelikle ödev sisteminizi çok beğendiğimi söyleyerek başlamak istiyorum. Ödevler; kapsamlı, konu ile ilgili becerileri geliştirmeye yönelik, özenli ve çok tatmin ediciydi. Bu ödevleri kontrol etmeniz, öğrenmenin peşinden koşmanız ve süreci sıkı tutmanız benim için büyük bir motivasyon kaynağıydı. Ödevlere verdiğiniz geri bildirimler gerçekten çok değerliydi. Konuları işleyiş tarzınız ve içerikler oldukça ilgi çekiciydi. Çalışma disiplininizi çok takdir ediyorum. Gösterdiğiniz özveri ve katkılarınız için çok teşekkür ederim.", author: "AYTUL A" },
  { content: "Hatice Hoca; duruşuyla, vizyonuyla ve İngilizce öğretme azmiyle hayran olduğum birisi. İngilizce konusunda ciddi önyargılarım olmasına rağmen, her zaman beni yargılamadan dinledi. Daha önce sosyal medya üzerinden ulaştığım birçok İngilizce kursu aldım. Ama keşke bu kursları almayıp Hatice Hoca ile daha önce tanışsaydım diyorum. Emekleriniz çok değerli hocam, teşekkür ederim.", author: "KUBRA E" },
  { content: "Büşra Hoca ve Hatice Hocanın üzerimdeki emeği gerçekten paha biçilemez. Her ders, öğrenme sürecimi desteklemek ve beni daha ileriye taşımak için büyük bir özenle hazırlanıyor. Büşra Hoca ve Hatice Hocanın bu düzenli takibi beni çok mutlu ediyor. İkisi de sadece bir öğretmen değil, aynı zamanda ilham kaynağı ve rehber. Bu samimiyetiniz ve özveriniz sayesinde dersler çok daha verimli ve keyifli geçiyor. Hayallerimize bir adım daha yaklaşıyoruz sayenizde. İyi ki varsınız, iyi ki sizinle tanışmışım. 😊", author: "SENA S" },
];

const SlidingComments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="indicators-carousel" className="relative w-full mt-24 mb-20 px-2">
      {/* Carousel wrapper */}
      {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-96"> */}
      <div className="relative h-auto overflow-hidden rounded-lg  ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              // className="w-full h-[130px] xs:h-[170px] sm:h-[190px] md:h-[230px] lg:h-[400px] flex-shrink-0 "
              className="w-full h-auto flex-shrink-0 "
            >
              {/* <img
                src={slide.src}
                className="w-full h-full object-contain"
                alt={slide.alt}
              /> */}
              <CommentCard slide={slide} />
            </div>
          ))}
        </div>
      </div>
      {/* Slider indicators */}
      <div className=" flex items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-dark-red" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-end sm:items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl transition-all group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-500 group-hover:text-dark-red transition-all rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-end sm:items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl transition-all group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-500 group-hover:text-dark-red transition-all rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default SlidingComments;


// "use client";
// import { useEffect, useState } from "react";

// const SlidingComments = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     { src: "/images/comment1.png", alt: "comment1" },
//     { src: "/images/comment2.png", alt: "comment2" },
//     { src: "/images/comment3.png", alt: "comment3" },
//     { src: "/images/comment1.png", alt: "comment1" },
//     { src: "/images/comment4.png", alt: "comment4" },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => nextSlide(), 4000);
//     return () => clearInterval(interval);
//   }, []);


//   return (
//     <div id="indicators-carousel" className="relative w-full mt-24 mb-20 px-2">
//       {/* Carousel wrapper */} 
//         <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute block w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[220px] transition-opacity duration-700 ease-in-out ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.src}
//                 className="w-full h-full object-contain"
//                 alt={slide.alt}
//               />
//             </div>
//           ))}
//         </div> 
//       {/* Slider indicators */}
//       <div className="absolute z-30  flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-dark-red" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//             aria-current={index === currentIndex}
//             aria-label={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Slider controls */}

//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex  items-end sm:items-center justify-center h-full px-4 cursor-pointer group focus:outline-none  "
//         onClick={prevSlide}
//       > 
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl transition-all    group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-gray-500 group-hover:text-dark-red transition-all    rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span> 
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-end sm:items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={nextSlide}
//       >
         
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl transition-all     group-focus:ring-4 group-focus:ring-white   group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-gray-500 group-hover:text-dark-red transition-all  rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span> 
//       </button>
//     </div>
//   );
// };

// export default SlidingComments;
