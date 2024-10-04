"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Link from "next/link";


const AboutUsHome = () => {
  const sectionRef = useRef(null);

  // Bileşenin ekranda görünür olup olmadığını kontrol eden hook
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1, // %10'u görünür olunca tetikler
  });

  return (
    <div className="flex gap-2 lg:items-start items-center flex-col md:flex-row py-24 px-2 relative ">
      {/* image */}
      <div className="flex-1 animate-wiggle">
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: -100 }} // Başlangıçta görünmez
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Göründüğünde animasyon başlat
          transition={{ duration: 1.1 }} // Animasyon süresi
          className=""
        >
          <img
            src="/images/aboutus.png"
            alt="about"
            className="w-4/5 md:w-full xl:w-4/5 mx-auto "
          />
        </motion.section>
      </div>

      {/* content */}
      <div className="flex-1 ">
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, x: 100 }} // Başlangıçta görünmez
          animate={isVisible ? { opacity: 1, x: 0 } : {}} // Göründüğünde animasyon başlat
          transition={{ duration: 1.1 }} // Animasyon süresi
          className=""
        >
          <h3 className="geist-font text-4xl md:text-5xl lg:text-6xl mb-9 text-dark-red">
            Hakkımızda
          </h3>
          <ul className="flex flex-col gap-5 text-sm text-[#5E5E5E]">
            <li className="">
              <p className="">
                <b>Kaf Dil</b> olarak, <b>dil öğrenme</b> sürecini daha
                erişilebilir ve keyifli hale getirmek için hizmet veriyoruz.
                Amacımız, <b>öğrencilere ve profesyonellere</b> ihtiyaçlarına
                yönelik en etkili ve pratik online İngilizce eğitimlerini
                sunmak.
              </p>
            </li>
            <li className="">
              <p className="">
                Alanında <b>uzman eğitmenlerimiz</b> ve yenilikçi eğitim
                yaklaşımlarımızla, dil öğrenimini sıradanlıktan çıkarıyor ve
                interaktif bir deneyime dönüştürüyoruz. Gelişen teknolojiyi
                eğitim süreçlerimize entegre ederek, esnek ders programları,{" "}
                <b>kişiye özel öğrenme planları</b> ve sürekli geri bildirim ile
                öğrencilerimizin başarıya ulaşmasına yardımcı oluyoruz.
              </p>
            </li>
            <li className="">
              <p className="">
                Online platformumuzda hem bireysel hem de kurumsal kullanıcılara
                yönelik, her seviyeye uygun kurslar sunuyor, dil öğrenme
                yolculuğunuzu en verimli hale getirmek için size özel çözümler
                üretiyoruz. Hedeflerinize ulaşmak için her adımda yanınızdayız.
              </p>
            </li>
            <li className="">
              <p className="">
                Bizimle <Link href="/contact" className="text-blue-500 hover:underline">iletişime</Link> geçin, İngilizce öğrenme serüveninizi hemen
                başlatalım!
              </p>
            </li>
          </ul>
        </motion.section>
      </div> 
    </div>
  );
};

export default AboutUsHome;
