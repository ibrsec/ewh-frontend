"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Link from "next/link";

const TrainingsHome = () => {
  const sectionRef = useRef(null);

  // Bileşenin ekranda görünür olup olmadığını kontrol eden hook
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1, // %10'u görünür olunca tetikler
  });

  return (
    <div className="flex gap-2 lg:items-start items-center flex-col md:flex-row py-24 px-2 relative my-20">
      {/* content */}
      <div className="flex-1 overflow-x-hidden-hidden ">
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, x: -100 }} // Başlangıçta görünmez
          animate={isVisible ? { opacity: 1, x: 0 } : {}} // Göründüğünde animasyon başlat
          transition={{ duration: 1.1 }} // Animasyon süresi
          className=""
        >
          <h3 className="geist-font text-4xl md:text-5xl lg:text-6xl mb-12 text-dark-red">
            Eğitimlerimiz
          </h3>
          <div className="flex flex-col gap-6 text-md md:text-lg text-[#5E5E5E] poppins-font">
            <div className="">
              <p className="">
                <b>Kaf Dil</b> olarak, <b>dil öğrenme</b> sürecini daha
                erişilebilir ve keyifli hale getirmek için hizmet veriyoruz.
                Amacımız, <b>öğrencilere ve profesyonellere</b> ihtiyaçlarına
                yönelik en etkili ve pratik online İngilizce eğitimlerini
                sunmak.
              </p>
            </div>
            <ul className="list-none text-sm md:text-md">
              <li className="before:content-['🔥'] before:mr-2 before:text-red-500 mb-3">
                Size özel, kapsamlı ders videolarıyla dilinizi geliştirmek daha
                pratik ve hızlı
              </li>
              <li className="before:content-['🔥'] before:mr-2 before:text-red-500 mb-3">
                Uluslararası seyahatler için pratik beceriler
              </li>
              <li className="before:content-['🔥'] before:mr-2 before:text-red-500 mb-3">
                Öğrenciler, günlük yaşamda bilgilerini pratik uygulamalarla
                güçlendiriyorlar
              </li>
            </ul>
            <div className="">
              <Link href="/trainings" className="primary-button">
                İncele
              </Link>
            </div>
          </div>
        </motion.section>
      </div>

      {/* image */}
      <div className="flex-1 animate-wiggle">
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 100 }} // Başlangıçta görünmez
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Göründüğünde animasyon başlat
          transition={{ duration: 1.1 }} // Animasyon süresi
          className=""
        >
          <img
            src="/images/trainingsHomeSvg.png"
            alt="about"
            className="w-4/5 md:w-full xl:w-4/5 mx-auto "
          />
        </motion.section>
      </div>
    </div>
  );
};

export default TrainingsHome;
