import Banner from "@/components/banner/Banner";
import TrainingCard from "./components/TrainingCard";
import TrainingsHome from "@/components/trainingsHome/TrainingsHome";

const trainings = [
  {
    name: "Genel ingilizce",
    image: "/images/genel-ingilizce.jpg",
    description:
      "Genel ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/genelingilizce",
    price: 150,
    points: [
      "72 Saat Online Canlı Ders",
      "Kaçırdığınız dersler için tekrar izleme imkanı",
      "Koçluk & Mentörlük (Aylık takip çizelgesi)",
      "3 Aylık ödev programı ve ödev dosyası",
      "3 Aylık vocaprof.com üyeliği",
    ],
    time: "48 saat",
  },
  {
    name: "Grup Dersleri",
    image: "/images/grup-dersleri.jpg",
    description:
      "Grup dersleri eğitimimiziz. Grup derslerinde eğitim üzerine çok yardımcı olun.",
    href: "/grupders",
    price: 120,
    time: "48 saat",
    points: [
      "72 Saat Online Canlı Ders",
      "Kaçırdığınız dersler için tekrar izleme imkanı",
    ],
  },
  {
    name: "Ozel Dersleri",
    image: "/images/ozel-dersleri.jpg",
    description:
      "Ozel Dersler eğitimimiz. Özel derslerde eğitim üzerine çok yardımcı olun.",
    href: "/ozelders",
    price: 100,
    time: "3 gün saat",
    points: [
      "3 Aylık ödev programı ve ödev dosyası",
      "3 Aylık vocaprof.com üyeliği",
    ],
  },
  {
    name: "Speaking club",
    image: "/images/speaking-club.jpg",
    description:
      "Speaking club eğitimimiz. Speaking club derslerinde eğitim üzerine çok yardımcı olun.",
    href: "/speakingclub",
    price: 80,
    time: "1 yil",
    points: [
      "72 Saat Online Canlı Ders",
      "Kaçırdığınız dersler için tekrar izleme imkanı",
      "3 Aylık vocaprof.com üyeliği",
    ],
  },
  {
    name: "IELTS kursu",
    image: "/images/ielts-kursu.jpg",
    description:
      "IELTS kursu eğitimimiz. IELTS kursları için özel bir eğitimimiziz.",
    href: "/ielts",
    price: 100,
    time: "3 ay",
    points: [
      "Kaçırdığınız dersler için tekrar izleme imkanı",
      "Koçluk & Mentörlük (Aylık takip çizelgesi)",
      "3 Aylık ödev programı ve ödev dosyası",
    ],
  },
];

const TrainingsPage = () => {
  return (
    <div className="mb-24">
      <Banner path="/images/trainings.jpg" title="EĞİTİMLERİMİZ" />

      <div className="max-w-6xl mx-auto px-2">
        <TrainingsHome buttonShow={false} />
        {/* trainings list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
          {trainings?.map((training, idx) => (
            <TrainingCard key={idx} training={training} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingsPage;
