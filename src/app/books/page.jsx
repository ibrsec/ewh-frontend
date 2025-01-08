import Banner from "@/components/banner/Banner";
import BookCard from "./components/BookCard";
import NoContent from "@/components/noContent/NoContent";

const books = [
  { 
    name: "Eğitmenlerle Yaşayan İngilizce",
    // description: "Eğitmenlerle yaşayan ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/egitmenlerle-yasayan-ingilizce",
    image: "https://www.iskultur.com.tr/webp/2021/03/Otomatik-Portakal-Sert-Kapak.png",
    price: 200, 
  },
  { 
    name: "Animal Farm",
    // description: "Eğitmenlerle yaşayan ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/animal-farm",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/63541/uploads/urunresimleri/buyuk/animal-farm--4e02-.jpeg",
    price: 100, 
  },
  { 
    name: "Sozluk",
    // description: "Eğitmenlerle yaşayan ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/sozluk",
    image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000603923-1.jpg",
    price: 250, 
  },
  { 
    name: "Eğitmenlerle Yaşayan İngilizce",
    // description: "Eğitmenlerle yaşayan ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/egitmenlerle-yasayan-ingilizce",
    image: "https://www.iskultur.com.tr/webp/2021/03/Otomatik-Portakal-Sert-Kapak.png",
    price: 200, 
  },
  { 
    name: "Animal Farm",
    // description: "Eğitmenlerle yaşayan ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/animal-farm",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/63541/uploads/urunresimleri/buyuk/animal-farm--4e02-.jpeg",
    price: 100, 
  },
  { 
    name: "Sozluk",
    // description: "Eğitmenlerle yaşayan ingilizce derslerini almanız için özel bir eğitimimiziz.",
    href: "/sozluk",
    image: "https://i.dr.com.tr/cache/500x400-0/originals/0000000603923-1.jpg",
    price: 250, 
  },
]

const BooksPage = () => {
  return (
    <div>
      <Banner path="/images/books.png" title="KİTAPLARIMIZ" />

      <div className="max-w-6xl mx-auto px-2 mb-24">
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  ">
          {books?.map((book, idx) => (
            <BookCard key={idx} book={book} index={idx} />
          ))}
        </div> */}
        <p className=" text-center text-lg my-10">Kitaplarımıza yakında bu sayfadan ulaşabilirsiniz, bizi takip etmeye devam edin!</p>
        <NoContent />
      </div>
    </div>
  );
};

export default BooksPage;
