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
      <div className="flex-1 overflow-hidden ">
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
                <em>LinguaPlus Akademi</em>, İngilizce dil eğitimine yenilikçi bir yaklaşım sunan, uluslararası standartlarda profesyonel ve bilimsel yöntemlerle dil öğretmeyi amaçlayan bir dil eğitim kurumudur. Yurtiçi ve yurtdışında <em>İngilizce eğitimi</em> konusunda eğitim almış, alanında uzun yıllara dayanan deneyime sahip uzman ve genç eğitmenlerimiz ile öğrencilerimize her seviyede kapsamlı ve etkili bir öğrenme deneyimi sunmayı hedeflemekteyiz. 
              </p>
            </li>
            <li className="">
              <p className="">
              <b>LinguaPlus Akademi</b>, eğitmenlerimizin geniş bilgi birikimi, profesyonel yaklaşımı ve bireysel ders planlamalarıyla, öğrencilerimizin hedeflerine en doğru ve hızlı şekilde ulaşmalarını sağlamayı amaç edinmiştir. 
              </p>
            </li>
            <li className="">
              <p className="">
              Öğrencilerimiz, esnek ders saatleri ve çeşitli eğitim seçenekleri ile ihtiyaç duydukları anda, kendi programlarına uygun biçimde eğitim alabilmektedir. Bu sayede dil öğrenme süreci, öğrencilerimizin yoğun programlarına uyum sağlarken, ulaşılabilir bir hale gelmektedir.

              </p>
            </li>
            <li className="">
              <p className="">
              LinguaPlus Akademi olarak, dört beceri yaklaşımını benimseyerek dil öğrenimini destekliyoruz. Tüm ders içeriklerimizde; <b>konuşma, yazma, dinleme ve okuma</b> becerilerini bir arada sunarak, öğrencilerimizi günlük yaşam, iş hayatı ve akademik ortamlar için gerekli dil becerileriyle donatmayı hedeflemekteyiz. Bunun yanı sıra, bireysel farklılıkları gözeten özel ders planlamaları, kişiye özel ödevlendirme süreçleri ve düzenli geri bildirimlerle her öğrencinin kendine özgü ihtiyaçlarına yanıt vermekteyiz.
              </p>
            </li>
            <li className="">
              <p className="">
                {/* Bizimle <Link href="/contact" className="text-blue-500 hover:underline">iletişime</Link> geçin, İngilizce öğrenme serüveninizi hemen
                başlatalım! */}
                Özetle, LinguaPlus Akademi, deneyimli kadrosu ve bilimsel öğretim yöntemleri ile her öğrencisini, İngiliz dilini dört beceriyi yetkin şekilde kullanabilen, dil kullanımında özgüven sahibi bireyler olarak yetiştirmeyi amaçlayan bir eğitim kurumudur.

              </p>
            </li>
          </ul>
        </motion.section>
      </div> 
    </div>
  );
};

export default AboutUsHome;
