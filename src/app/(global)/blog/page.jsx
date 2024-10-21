"use client";
import Banner from "@/components/banner/Banner";
import MainBlogCard from "./components/MainBlogCard";
import RecentBlogCard from "./components/RecentBlogCard";
import WithBgBlogCard from "./components/WithBgBlogCard";
import useBlogServices from "@/lib/services/useBlogServices";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const blogs2 = [
  {
    title:
      "İngilizce Öğrenirken Yapılan 7 Yanlış ve Bunların Yerine Yapabileceğiniz Aktiviteler",
    image:
      "https://storage.acerapps.io/app-1509/WhatsApp%20Image%202024-05-03%20at%2011.28.00.jpeg",
    content: `Neredeyse dil öğrenen herkesin yakındığı “bu sözcükleri biliyorum ancak konuşurken aklıma gelmiyor” veya “farklı aksanları anlamakta zorlanıyorum” gibi durumlardan kaçınmak için ve konuşmanızı geciktiren yanlışların önüne geçmek için aşağıda sıraladığım 7 duruma göz atabilirsiniz. Bu pratikleri kullanarak ne gibi bir ilerleme kaydettiğini bizimle sosyal medyadan paylaşmayı unutmayın 😊
      1.❌ Hatalardan Korkmak ve Konuşmaktan Kaçınmak: Kelimeyi yanlış telaffuz etme veya yanlış türde cümleler kurma kaygısıyla hata yapmaktan korkmak ve bu sebepten İngilizce konuşmaktan kaçınmak, gelişiminizi engelleyebilir.
      ✨ Çözüm: Konuşmaktan çekinmeyin, çünkü hepimiz hatalarımız sayesinde daha çok şey öğreniriz; ayrıca yeni bir dil öğrenirken hata yapmak oldukça normal. Günlük hayatınıza İngilizce konuşma pratiklerini dahil edin. Örneğin; dışarıda kahve alırken İngilizce sipariş edebilirsiniz veya birlikte konuşabileceğiniz bir dil partneri ile düzenli olarak görüşebilirsiniz.
      2.❌ Dilbilgisini göz ardı etmek: Bazı öğrenciler dilbilgisi kurallarını öğrenmek yerine kelime edinmeye öncelik verebilir. Kelime bilgisi önemli olsa da dil bilgisinin ihmal edilmesi kafa karışıklığına ve yanlış kullanıma yol açabilir.
      ✨ Çözüm: Grammar konuları için zaman ayırıp bunları öğrenmeye çalışın. Bu kuralları ve yapıları cümle içinde kullanma alıştırması yapın. Her ne kadar bunun için kullanabileceğiniz uygulamalar bulunsa da, anadili konuşanlardan veya dil eğitmenlerinden geri bildirim almayı ihmal etmeyin.
      3.❌ Aktif Dinleme Yapmamak : Pasif bir şekilde dinlemek, anlama ve konuşma becerilerinizi geliştirmekte yetersizdir. Dinlerken, söylenen şeye odaklı olmadığınızda konuşulanı anlamanız zorlaşacaktır. 
      ✨ Çözüm: Dinlerken not alın, tekrar edin ve anladığınızı doğrulayın. Arada duyduğunuz kelimeleri yazmayı deneyebilirsiniz, böylece gördüğünüz kelimelerin doğru okunuşlarını da anlamanız kolaylaşacaktır. Ayrıca farklı aksanları ve hızları olan İngilizce materyaller dinleyerek dinleme becerilerinizi çeşitlendirin.
      4.❌ Uygulama eksikliği: Bir dili öğrenmek tutarlı bir uygulama gerektirir, ancak bazı öğrenciler düzenli uygulamaya yeterli zaman veya çaba ayırmayabilir.
      ✨ Çözüm: Dil öğrenmeyi günlük bir alışkanlık haline getirin. Hedef dilde dinleme, konuşma, okuma ve yazma pratikleri yapmak için her gün özel bir zaman ayırın. Düzenli olarak pratik yapmak için dil öğrenme uygulamalarını, çevrimiçi kaynakları ve dil değişim platformlarını kullanın.
      5.❌ Tek bir beceriye çok fazla odaklanmak: Bazı öğrenciler, kelime bilgisi veya dinlediğini anlama gibi dil öğreniminin yalnızca bir yönüne odaklanırken konuşma veya yazma gibi diğer becerileri ihmal edebilir.
      ✨ Çözüm: Dil öğrenimine dengeli bir yaklaşım için çabalayın. Genel yeterliliğinizi geliştirmek için dört dil becerisinin (dinleme, konuşma, okuma ve yazma) tamamını düzenli olarak uygulayın.
      6.❌ Kelime Ezberlemeye Dayalı Öğrenme: Sadece kelime ezberlemeye odaklanmak, kelimelerin gerçek kullanımını anlamadan dilin içine sinmesini engelleyebilir.
      ✨Çözüm: Kelimeleri ezberlemek yerine, onları cümleler içinde kullanarak öğrenin. Kelimelerin anlamlarını, kullanımlarını ve deyimlerini öğrenmek için öyküler okuyun veya kelime kartları oluşturun.
      7.❌ Günlük Pratik Yapmayı İhmal Etmek: Haftada bir veya iki kez İngilizce çalışmak, dil becerilerinizi sürdürmek için yeterli olmayabilir.
      ✨ Çözüm: Bir dil günlüğü tutun, günlük olarak kısa metinler yazın veya İngilizce bloglar okuyun. Gördüğünüz veya duyduğunuz kelimeleri belirleyip bunları gün içinde yazdığınız metinde kullanın. Her gün düzenli olarak 15-30 dakika zaman ayırarak, dilinizi sürekli geliştirebilirsiniz.
      Eğer bunları yapmak istiyor ancak nereden başlayacağını veya nasıl program oluşturacağını bilemiyorsan, benimle veya kurumumuzdaki başka bir öğretmen ile çalışmaya başlayabilirsin. Keep learning, you’ve got this!`,
    href: "/yeni-bir-egitim-yaratiyoruz",
    createdAt: "2024-09-27T06:45:00.000+02:00",
    author: "Yagmur Bilgec",
  },
  {
    title: "İşte İngilizcenizi Geliştirebileceğiniz Bazı Çizgi Film Önerileri!",
    image: "https://storage.acerapps.io/app-1509/539343.jpg",
    content: `
    ngilizce geliştirmek için çizgi film izlemek harika bir yol olabilir! İşte bazı çizgi film önerileri:
    1. *SpongeBob SquarePants:* Bu çocukların ve yetişkinlerin keyifle izleyebileceği komik bir çizgi film. İngilizce konuşulan karakterlerin etkileyici aksanları vardır.
    2. *Adventure Time:* Bu çizgi film, eğlenceli diyaloglar ve farklı aksanları içerir. Kelimelerin ve ifadelerin nasıl kullanıldığını öğrenmek için faydalı olabilir.
    3. *The Simpsons:* Bu klasik çizgi film, Amerikan kültürünü ve dilini eğlenceli bir şekilde yansıtır. İzlerken çeşitli kelime ve ifadeleri yakalayabilirsiniz.
    4. *Rick and Morty:* Bu bilim kurgu komedisi, zekice yazılmış diyaloglar ve karmaşık kelime oyunları içerir. İngilizce kelime dağarcığınızı geliştirebilirsiniz.
    5. *South Park:* Bu çizgi film, çeşitli aksanları ve kültürel referansları içerir. Dil becerilerinizi sınamak için iyi bir seçenek olabilir.
    6. *Family Guy:* Bu çizgi film, mizah ve kelime oyunlarına dayalıdır. İzlerken farklı ifadeleri ve dil kullanımını öğrenmek mümkün olabilir.
    7. *BoJack Horseman:* Bu çizgi film, karmaşık karakter gelişimi ve duygusal diyalogları içerir. İngilizceyi daha derinlemesine anlamak için kullanışlı olabilir.
    Bu çizgi filmleri izlerken İngilizce altyazıları açabilir veya İngilizce dublajlı versiyonlarını tercih edebilirsiniz. Ayrıca, kelime dağarcığınızı geliştirmek ve telaffuzunuza yardımcı olmak için çizgi filmlerdeki konuşmaları tekrarlayabilirsiniz.
    `,
    href: "/cizgifilmler",
    createdAt: "2024-02-19T06:45:00.000+02:00",
    author: "Merve Saman",
  },
  {
    title: "Ders Çalışma Planında Mutlaka Olması Gerekenler",
    image: "https://storage.acerapps.io/app-1509/study(2).jpg",
    content: `
    Ders Çalışma Planında Mutlaka Olması Gerekenler
        🙌Her gün 4 beceriye yönelik,şu kaynaklardan ilgi alanına göre seçebilirsin;(hadi hemen kalemi kağıda eline al not et
        ✅Listening için
        🌟lyricstraining.com
        🌟esl-lab.com
        🌟elllo.org
        ✅Speaking için
        🌟British Council Teens
        🌟English Club
        🌟BBC Learning
        🌟Talk English
        ✅Writing için
        🌟Grammarly.com
        🌟Ludwig.guru
        🌟paperrater.com
        ✅Reading için
        🌟els-bits.net
        🌟adapted-English-books.site
        🌟manybooks.net
        🌟breakingnewsenglish.com
        🌟readpoopfiction.com
        🌟british council teens
        ✅Kelime çalışması için;
        🌟rh+ sözlük
        🌟merriam webster
        ✅Toefl-ielts-yökdil çalışması için;
        🌟Atlas uygulaması
        🌟Grammarbank.com
        🌟engvid.com
    `,
    href: "/dersprogrami",
    createdAt: "2024-02-14:45:00.000+02:00",
    author: "Mustafa Kadir",
  },
  {
    title: "Ingilizce Öğrenmeye Sıfırdan Başlayanlar İçin Bazı Yöntemler",
    image:
      "https://storage.acerapps.io/app-1509/woman-teaching-students-english-lesson-online%20(1)%20(1).jpg",
    content: `
    İngilizce öğrenmeye sıfırdan başlayanlar için bazı yöntemler:
    1. Düzenli Pratik Yapma: Her gün belirli bir süre İngilizce konuşma veya yazma pratiği yapmak, dil becerilerinizi geliştirmenize yardımcı olur.
    2. Dil Kurslarına Katılma: Yerel dil kurslarına veya online dil kurslarına katılarak profesyonel rehberlik ve yapıcı geri bildirim alabilirsiniz.
    3. Dil Değiştirme Pratiği: İngilizceyi günlük yaşamınıza dahil etmek için mümkün olduğunca dil değiştirme pratiği yapın. Örneğin, İngilizce haberleri izleyin veya İngilizce podcast'ler dinleyin.
    4. Kelime Kartları Kullanma: Yeni kelimeleri öğrenmek ve ezberlemek için kelime kartları kullanabilirsiniz.
    5. Yazma Alıştırmaları: Günlük günlük tutmak veya makaleler yazmak gibi yazma alıştırmaları yaparak yazma becerilerinizi geliştirebilirsiniz.
    6. Dil Değişim Partneri Bulma: Dil değişim partneri ile pratik yapmak, İngilizce konuşma yeteneklerinizi artırabilir. Kendi dilinizi öğretmeye çalışan birinin size kendi dilini öğretmesi gibi.
    7. Dil Öğrenme Uygulamaları: İngilizce öğrenme uygulamaları, oyunlar ve çevrimiçi kaynaklar, dil öğrenme sürecinizi eğlenceli ve etkili bir şekilde destekleyebilir.
    8. Dil Kitapları Okuma: İngilizce romanlar, öyküler veya makaleler okuyarak hem kelime dağarcığınızı genişletebilir hem de okuma becerilerinizi geliştirebilirsiniz.
    9. Dinleme Becerilerinizi Geliştirme: İngilizce konuşulan müzik, podcast'ler ve videoları dinleyerek dinleme becerilerinizi güçlendirebilirsiniz.
    10. Hata Yapmaktan Korkma: Dil öğrenirken hatalar kaçınılmazdır. Hataları bir öğrenme fırsatı olarak görün ve cesurca iletişim kurmaktan korkmayın.
    Bu yöntemleri kullanarak, İngilizce öğrenme sürecinizi daha etkili ve keyifli hale getirebilirsiniz. Unutmayın ki sabır ve düzenlilik başarınızı artırmada önemlidir.
    `,
    href: "/sifirdan",
    createdAt: "2024-05-16T06:45:00.000+02:00",
    author: "Necati Kavur",
  },
  {
    title:
      "İngilizce Öğrenirken Yapılan 7 Yanlış ve Bunların Yerine Yapabileceğiniz Aktiviteler",
    image:
      "https://storage.acerapps.io/app-1509/WhatsApp%20Image%202024-05-03%20at%2011.28.00.jpeg",
    content: `Neredeyse dil öğrenen herkesin yakındığı “bu sözcükleri biliyorum ancak konuşurken aklıma gelmiyor” veya “farklı aksanları anlamakta zorlanıyorum” gibi durumlardan kaçınmak için ve konuşmanızı geciktiren yanlışların önüne geçmek için aşağıda sıraladığım 7 duruma göz atabilirsiniz. Bu pratikleri kullanarak ne gibi bir ilerleme kaydettiğini bizimle sosyal medyadan paylaşmayı unutmayın 😊
      1.❌ Hatalardan Korkmak ve Konuşmaktan Kaçınmak: Kelimeyi yanlış telaffuz etme veya yanlış türde cümleler kurma kaygısıyla hata yapmaktan korkmak ve bu sebepten İngilizce konuşmaktan kaçınmak, gelişiminizi engelleyebilir.
      ✨ Çözüm: Konuşmaktan çekinmeyin, çünkü hepimiz hatalarımız sayesinde daha çok şey öğreniriz; ayrıca yeni bir dil öğrenirken hata yapmak oldukça normal. Günlük hayatınıza İngilizce konuşma pratiklerini dahil edin. Örneğin; dışarıda kahve alırken İngilizce sipariş edebilirsiniz veya birlikte konuşabileceğiniz bir dil partneri ile düzenli olarak görüşebilirsiniz.
      2.❌ Dilbilgisini göz ardı etmek: Bazı öğrenciler dilbilgisi kurallarını öğrenmek yerine kelime edinmeye öncelik verebilir. Kelime bilgisi önemli olsa da dil bilgisinin ihmal edilmesi kafa karışıklığına ve yanlış kullanıma yol açabilir.
      ✨ Çözüm: Grammar konuları için zaman ayırıp bunları öğrenmeye çalışın. Bu kuralları ve yapıları cümle içinde kullanma alıştırması yapın. Her ne kadar bunun için kullanabileceğiniz uygulamalar bulunsa da, anadili konuşanlardan veya dil eğitmenlerinden geri bildirim almayı ihmal etmeyin.
      3.❌ Aktif Dinleme Yapmamak : Pasif bir şekilde dinlemek, anlama ve konuşma becerilerinizi geliştirmekte yetersizdir. Dinlerken, söylenen şeye odaklı olmadığınızda konuşulanı anlamanız zorlaşacaktır. 
      ✨ Çözüm: Dinlerken not alın, tekrar edin ve anladığınızı doğrulayın. Arada duyduğunuz kelimeleri yazmayı deneyebilirsiniz, böylece gördüğünüz kelimelerin doğru okunuşlarını da anlamanız kolaylaşacaktır. Ayrıca farklı aksanları ve hızları olan İngilizce materyaller dinleyerek dinleme becerilerinizi çeşitlendirin.
      4.❌ Uygulama eksikliği: Bir dili öğrenmek tutarlı bir uygulama gerektirir, ancak bazı öğrenciler düzenli uygulamaya yeterli zaman veya çaba ayırmayabilir.
      ✨ Çözüm: Dil öğrenmeyi günlük bir alışkanlık haline getirin. Hedef dilde dinleme, konuşma, okuma ve yazma pratikleri yapmak için her gün özel bir zaman ayırın. Düzenli olarak pratik yapmak için dil öğrenme uygulamalarını, çevrimiçi kaynakları ve dil değişim platformlarını kullanın.
      5.❌ Tek bir beceriye çok fazla odaklanmak: Bazı öğrenciler, kelime bilgisi veya dinlediğini anlama gibi dil öğreniminin yalnızca bir yönüne odaklanırken konuşma veya yazma gibi diğer becerileri ihmal edebilir.
      ✨ Çözüm: Dil öğrenimine dengeli bir yaklaşım için çabalayın. Genel yeterliliğinizi geliştirmek için dört dil becerisinin (dinleme, konuşma, okuma ve yazma) tamamını düzenli olarak uygulayın.
      6.❌ Kelime Ezberlemeye Dayalı Öğrenme: Sadece kelime ezberlemeye odaklanmak, kelimelerin gerçek kullanımını anlamadan dilin içine sinmesini engelleyebilir.
      ✨Çözüm: Kelimeleri ezberlemek yerine, onları cümleler içinde kullanarak öğrenin. Kelimelerin anlamlarını, kullanımlarını ve deyimlerini öğrenmek için öyküler okuyun veya kelime kartları oluşturun.
      7.❌ Günlük Pratik Yapmayı İhmal Etmek: Haftada bir veya iki kez İngilizce çalışmak, dil becerilerinizi sürdürmek için yeterli olmayabilir.
      ✨ Çözüm: Bir dil günlüğü tutun, günlük olarak kısa metinler yazın veya İngilizce bloglar okuyun. Gördüğünüz veya duyduğunuz kelimeleri belirleyip bunları gün içinde yazdığınız metinde kullanın. Her gün düzenli olarak 15-30 dakika zaman ayırarak, dilinizi sürekli geliştirebilirsiniz.
      Eğer bunları yapmak istiyor ancak nereden başlayacağını veya nasıl program oluşturacağını bilemiyorsan, benimle veya kurumumuzdaki başka bir öğretmen ile çalışmaya başlayabilirsin. Keep learning, you’ve got this!`,
    href: "/yeni-bir-egitim-yaratiyoruz",
    createdAt: "2024-09-27T06:45:00.000+02:00",
    author: "Yagmur Bilgec",
  },
  {
    title: "İşte İngilizcenizi Geliştirebileceğiniz Bazı Çizgi Film Önerileri!",
    image: "https://storage.acerapps.io/app-1509/539343.jpg",
    content: `
    ngilizce geliştirmek için çizgi film izlemek harika bir yol olabilir! İşte bazı çizgi film önerileri:
    1. *SpongeBob SquarePants:* Bu çocukların ve yetişkinlerin keyifle izleyebileceği komik bir çizgi film. İngilizce konuşulan karakterlerin etkileyici aksanları vardır.
    2. *Adventure Time:* Bu çizgi film, eğlenceli diyaloglar ve farklı aksanları içerir. Kelimelerin ve ifadelerin nasıl kullanıldığını öğrenmek için faydalı olabilir.
    3. *The Simpsons:* Bu klasik çizgi film, Amerikan kültürünü ve dilini eğlenceli bir şekilde yansıtır. İzlerken çeşitli kelime ve ifadeleri yakalayabilirsiniz.
    4. *Rick and Morty:* Bu bilim kurgu komedisi, zekice yazılmış diyaloglar ve karmaşık kelime oyunları içerir. İngilizce kelime dağarcığınızı geliştirebilirsiniz.
    5. *South Park:* Bu çizgi film, çeşitli aksanları ve kültürel referansları içerir. Dil becerilerinizi sınamak için iyi bir seçenek olabilir.
    6. *Family Guy:* Bu çizgi film, mizah ve kelime oyunlarına dayalıdır. İzlerken farklı ifadeleri ve dil kullanımını öğrenmek mümkün olabilir.
    7. *BoJack Horseman:* Bu çizgi film, karmaşık karakter gelişimi ve duygusal diyalogları içerir. İngilizceyi daha derinlemesine anlamak için kullanışlı olabilir.
    Bu çizgi filmleri izlerken İngilizce altyazıları açabilir veya İngilizce dublajlı versiyonlarını tercih edebilirsiniz. Ayrıca, kelime dağarcığınızı geliştirmek ve telaffuzunuza yardımcı olmak için çizgi filmlerdeki konuşmaları tekrarlayabilirsiniz.
    `,
    href: "/cizgifilmler",
    createdAt: "2024-02-19T06:45:00.000+02:00",
    author: "Merve Saman",
  },
  {
    title: "Ders Çalışma Planında Mutlaka Olması Gerekenler",
    image: "https://storage.acerapps.io/app-1509/study(2).jpg",
    content: `
    Ders Çalışma Planında Mutlaka Olması Gerekenler
        🙌Her gün 4 beceriye yönelik,şu kaynaklardan ilgi alanına göre seçebilirsin;(hadi hemen kalemi kağıda eline al not et
        ✅Listening için
        🌟lyricstraining.com
        🌟esl-lab.com
        🌟elllo.org
        ✅Speaking için
        🌟British Council Teens
        🌟English Club
        🌟BBC Learning
        🌟Talk English
        ✅Writing için
        🌟Grammarly.com
        🌟Ludwig.guru
        🌟paperrater.com
        ✅Reading için
        🌟els-bits.net
        🌟adapted-English-books.site
        🌟manybooks.net
        🌟breakingnewsenglish.com
        🌟readpoopfiction.com
        🌟british council teens
        ✅Kelime çalışması için;
        🌟rh+ sözlük
        🌟merriam webster
        ✅Toefl-ielts-yökdil çalışması için;
        🌟Atlas uygulaması
        🌟Grammarbank.com
        🌟engvid.com
    `,
    href: "/dersprogrami",
    createdAt: "2024-02-14:45:00.000+02:00",
    author: "Mustafa Kadir",
  },
  {
    title: "Ingilizce Öğrenmeye Sıfırdan Başlayanlar İçin Bazı Yöntemler",
    image:
      "https://storage.acerapps.io/app-1509/woman-teaching-students-english-lesson-online%20(1)%20(1).jpg",
    content: `
    İngilizce öğrenmeye sıfırdan başlayanlar için bazı yöntemler:
    1. Düzenli Pratik Yapma: Her gün belirli bir süre İngilizce konuşma veya yazma pratiği yapmak, dil becerilerinizi geliştirmenize yardımcı olur.
    2. Dil Kurslarına Katılma: Yerel dil kurslarına veya online dil kurslarına katılarak profesyonel rehberlik ve yapıcı geri bildirim alabilirsiniz.
    3. Dil Değiştirme Pratiği: İngilizceyi günlük yaşamınıza dahil etmek için mümkün olduğunca dil değiştirme pratiği yapın. Örneğin, İngilizce haberleri izleyin veya İngilizce podcast'ler dinleyin.
    4. Kelime Kartları Kullanma: Yeni kelimeleri öğrenmek ve ezberlemek için kelime kartları kullanabilirsiniz.
    5. Yazma Alıştırmaları: Günlük günlük tutmak veya makaleler yazmak gibi yazma alıştırmaları yaparak yazma becerilerinizi geliştirebilirsiniz.
    6. Dil Değişim Partneri Bulma: Dil değişim partneri ile pratik yapmak, İngilizce konuşma yeteneklerinizi artırabilir. Kendi dilinizi öğretmeye çalışan birinin size kendi dilini öğretmesi gibi.
    7. Dil Öğrenme Uygulamaları: İngilizce öğrenme uygulamaları, oyunlar ve çevrimiçi kaynaklar, dil öğrenme sürecinizi eğlenceli ve etkili bir şekilde destekleyebilir.
    8. Dil Kitapları Okuma: İngilizce romanlar, öyküler veya makaleler okuyarak hem kelime dağarcığınızı genişletebilir hem de okuma becerilerinizi geliştirebilirsiniz.
    9. Dinleme Becerilerinizi Geliştirme: İngilizce konuşulan müzik, podcast'ler ve videoları dinleyerek dinleme becerilerinizi güçlendirebilirsiniz.
    10. Hata Yapmaktan Korkma: Dil öğrenirken hatalar kaçınılmazdır. Hataları bir öğrenme fırsatı olarak görün ve cesurca iletişim kurmaktan korkmayın.
    Bu yöntemleri kullanarak, İngilizce öğrenme sürecinizi daha etkili ve keyifli hale getirebilirsiniz. Unutmayın ki sabır ve düzenlilik başarınızı artırmada önemlidir.
    `,
    href: "/sifirdan",
    createdAt: "2024-05-16T06:45:00.000+02:00",
    author: "Necati Kavur",
  },
  {
    title:
      "İngilizce Öğrenirken Yapılan 7 Yanlış ve Bunların Yerine Yapabileceğiniz Aktiviteler",
    image:
      "https://storage.acerapps.io/app-1509/WhatsApp%20Image%202024-05-03%20at%2011.28.00.jpeg",
    content: `Neredeyse dil öğrenen herkesin yakındığı “bu sözcükleri biliyorum ancak konuşurken aklıma gelmiyor” veya “farklı aksanları anlamakta zorlanıyorum” gibi durumlardan kaçınmak için ve konuşmanızı geciktiren yanlışların önüne geçmek için aşağıda sıraladığım 7 duruma göz atabilirsiniz. Bu pratikleri kullanarak ne gibi bir ilerleme kaydettiğini bizimle sosyal medyadan paylaşmayı unutmayın 😊
      1.❌ Hatalardan Korkmak ve Konuşmaktan Kaçınmak: Kelimeyi yanlış telaffuz etme veya yanlış türde cümleler kurma kaygısıyla hata yapmaktan korkmak ve bu sebepten İngilizce konuşmaktan kaçınmak, gelişiminizi engelleyebilir.
      ✨ Çözüm: Konuşmaktan çekinmeyin, çünkü hepimiz hatalarımız sayesinde daha çok şey öğreniriz; ayrıca yeni bir dil öğrenirken hata yapmak oldukça normal. Günlük hayatınıza İngilizce konuşma pratiklerini dahil edin. Örneğin; dışarıda kahve alırken İngilizce sipariş edebilirsiniz veya birlikte konuşabileceğiniz bir dil partneri ile düzenli olarak görüşebilirsiniz.
      2.❌ Dilbilgisini göz ardı etmek: Bazı öğrenciler dilbilgisi kurallarını öğrenmek yerine kelime edinmeye öncelik verebilir. Kelime bilgisi önemli olsa da dil bilgisinin ihmal edilmesi kafa karışıklığına ve yanlış kullanıma yol açabilir.
      ✨ Çözüm: Grammar konuları için zaman ayırıp bunları öğrenmeye çalışın. Bu kuralları ve yapıları cümle içinde kullanma alıştırması yapın. Her ne kadar bunun için kullanabileceğiniz uygulamalar bulunsa da, anadili konuşanlardan veya dil eğitmenlerinden geri bildirim almayı ihmal etmeyin.
      3.❌ Aktif Dinleme Yapmamak : Pasif bir şekilde dinlemek, anlama ve konuşma becerilerinizi geliştirmekte yetersizdir. Dinlerken, söylenen şeye odaklı olmadığınızda konuşulanı anlamanız zorlaşacaktır. 
      ✨ Çözüm: Dinlerken not alın, tekrar edin ve anladığınızı doğrulayın. Arada duyduğunuz kelimeleri yazmayı deneyebilirsiniz, böylece gördüğünüz kelimelerin doğru okunuşlarını da anlamanız kolaylaşacaktır. Ayrıca farklı aksanları ve hızları olan İngilizce materyaller dinleyerek dinleme becerilerinizi çeşitlendirin.
      4.❌ Uygulama eksikliği: Bir dili öğrenmek tutarlı bir uygulama gerektirir, ancak bazı öğrenciler düzenli uygulamaya yeterli zaman veya çaba ayırmayabilir.
      ✨ Çözüm: Dil öğrenmeyi günlük bir alışkanlık haline getirin. Hedef dilde dinleme, konuşma, okuma ve yazma pratikleri yapmak için her gün özel bir zaman ayırın. Düzenli olarak pratik yapmak için dil öğrenme uygulamalarını, çevrimiçi kaynakları ve dil değişim platformlarını kullanın.
      5.❌ Tek bir beceriye çok fazla odaklanmak: Bazı öğrenciler, kelime bilgisi veya dinlediğini anlama gibi dil öğreniminin yalnızca bir yönüne odaklanırken konuşma veya yazma gibi diğer becerileri ihmal edebilir.
      ✨ Çözüm: Dil öğrenimine dengeli bir yaklaşım için çabalayın. Genel yeterliliğinizi geliştirmek için dört dil becerisinin (dinleme, konuşma, okuma ve yazma) tamamını düzenli olarak uygulayın.
      6.❌ Kelime Ezberlemeye Dayalı Öğrenme: Sadece kelime ezberlemeye odaklanmak, kelimelerin gerçek kullanımını anlamadan dilin içine sinmesini engelleyebilir.
      ✨Çözüm: Kelimeleri ezberlemek yerine, onları cümleler içinde kullanarak öğrenin. Kelimelerin anlamlarını, kullanımlarını ve deyimlerini öğrenmek için öyküler okuyun veya kelime kartları oluşturun.
      7.❌ Günlük Pratik Yapmayı İhmal Etmek: Haftada bir veya iki kez İngilizce çalışmak, dil becerilerinizi sürdürmek için yeterli olmayabilir.
      ✨ Çözüm: Bir dil günlüğü tutun, günlük olarak kısa metinler yazın veya İngilizce bloglar okuyun. Gördüğünüz veya duyduğunuz kelimeleri belirleyip bunları gün içinde yazdığınız metinde kullanın. Her gün düzenli olarak 15-30 dakika zaman ayırarak, dilinizi sürekli geliştirebilirsiniz.
      Eğer bunları yapmak istiyor ancak nereden başlayacağını veya nasıl program oluşturacağını bilemiyorsan, benimle veya kurumumuzdaki başka bir öğretmen ile çalışmaya başlayabilirsin. Keep learning, you’ve got this!`,
    href: "/yeni-bir-egitim-yaratiyoruz",
    createdAt: "2024-09-27T06:45:00.000+02:00",
    author: "Yagmur Bilgec",
  },
  {
    title: "İşte İngilizcenizi Geliştirebileceğiniz Bazı Çizgi Film Önerileri!",
    image: "https://storage.acerapps.io/app-1509/539343.jpg",
    content: `
    ngilizce geliştirmek için çizgi film izlemek harika bir yol olabilir! İşte bazı çizgi film önerileri:
    1. *SpongeBob SquarePants:* Bu çocukların ve yetişkinlerin keyifle izleyebileceği komik bir çizgi film. İngilizce konuşulan karakterlerin etkileyici aksanları vardır.
    2. *Adventure Time:* Bu çizgi film, eğlenceli diyaloglar ve farklı aksanları içerir. Kelimelerin ve ifadelerin nasıl kullanıldığını öğrenmek için faydalı olabilir.
    3. *The Simpsons:* Bu klasik çizgi film, Amerikan kültürünü ve dilini eğlenceli bir şekilde yansıtır. İzlerken çeşitli kelime ve ifadeleri yakalayabilirsiniz.
    4. *Rick and Morty:* Bu bilim kurgu komedisi, zekice yazılmış diyaloglar ve karmaşık kelime oyunları içerir. İngilizce kelime dağarcığınızı geliştirebilirsiniz.
    5. *South Park:* Bu çizgi film, çeşitli aksanları ve kültürel referansları içerir. Dil becerilerinizi sınamak için iyi bir seçenek olabilir.
    6. *Family Guy:* Bu çizgi film, mizah ve kelime oyunlarına dayalıdır. İzlerken farklı ifadeleri ve dil kullanımını öğrenmek mümkün olabilir.
    7. *BoJack Horseman:* Bu çizgi film, karmaşık karakter gelişimi ve duygusal diyalogları içerir. İngilizceyi daha derinlemesine anlamak için kullanışlı olabilir.
    Bu çizgi filmleri izlerken İngilizce altyazıları açabilir veya İngilizce dublajlı versiyonlarını tercih edebilirsiniz. Ayrıca, kelime dağarcığınızı geliştirmek ve telaffuzunuza yardımcı olmak için çizgi filmlerdeki konuşmaları tekrarlayabilirsiniz.
    `,
    href: "/cizgifilmler",
    createdAt: "2024-02-19T06:45:00.000+02:00",
    author: "Merve Saman",
  },
  {
    title: "Ders Çalışma Planında Mutlaka Olması Gerekenler",
    image: "https://storage.acerapps.io/app-1509/study(2).jpg",
    content: `
    Ders Çalışma Planında Mutlaka Olması Gerekenler
        🙌Her gün 4 beceriye yönelik,şu kaynaklardan ilgi alanına göre seçebilirsin;(hadi hemen kalemi kağıda eline al not et
        ✅Listening için
        🌟lyricstraining.com
        🌟esl-lab.com
        🌟elllo.org
        ✅Speaking için
        🌟British Council Teens
        🌟English Club
        🌟BBC Learning
        🌟Talk English
        ✅Writing için
        🌟Grammarly.com
        🌟Ludwig.guru
        🌟paperrater.com
        ✅Reading için
        🌟els-bits.net
        🌟adapted-English-books.site
        🌟manybooks.net
        🌟breakingnewsenglish.com
        🌟readpoopfiction.com
        🌟british council teens
        ✅Kelime çalışması için;
        🌟rh+ sözlük
        🌟merriam webster
        ✅Toefl-ielts-yökdil çalışması için;
        🌟Atlas uygulaması
        🌟Grammarbank.com
        🌟engvid.com
    `,
    href: "/dersprogrami",
    createdAt: "2024-02-14:45:00.000+02:00",
    author: "Mustafa Kadir",
  },
  {
    title: "Ingilizce Öğrenmeye Sıfırdan Başlayanlar İçin Bazı Yöntemler",
    image:
      "https://storage.acerapps.io/app-1509/woman-teaching-students-english-lesson-online%20(1)%20(1).jpg",
    content: `
    İngilizce öğrenmeye sıfırdan başlayanlar için bazı yöntemler:
    1. Düzenli Pratik Yapma: Her gün belirli bir süre İngilizce konuşma veya yazma pratiği yapmak, dil becerilerinizi geliştirmenize yardımcı olur.
    2. Dil Kurslarına Katılma: Yerel dil kurslarına veya online dil kurslarına katılarak profesyonel rehberlik ve yapıcı geri bildirim alabilirsiniz.
    3. Dil Değiştirme Pratiği: İngilizceyi günlük yaşamınıza dahil etmek için mümkün olduğunca dil değiştirme pratiği yapın. Örneğin, İngilizce haberleri izleyin veya İngilizce podcast'ler dinleyin.
    4. Kelime Kartları Kullanma: Yeni kelimeleri öğrenmek ve ezberlemek için kelime kartları kullanabilirsiniz.
    5. Yazma Alıştırmaları: Günlük günlük tutmak veya makaleler yazmak gibi yazma alıştırmaları yaparak yazma becerilerinizi geliştirebilirsiniz.
    6. Dil Değişim Partneri Bulma: Dil değişim partneri ile pratik yapmak, İngilizce konuşma yeteneklerinizi artırabilir. Kendi dilinizi öğretmeye çalışan birinin size kendi dilini öğretmesi gibi.
    7. Dil Öğrenme Uygulamaları: İngilizce öğrenme uygulamaları, oyunlar ve çevrimiçi kaynaklar, dil öğrenme sürecinizi eğlenceli ve etkili bir şekilde destekleyebilir.
    8. Dil Kitapları Okuma: İngilizce romanlar, öyküler veya makaleler okuyarak hem kelime dağarcığınızı genişletebilir hem de okuma becerilerinizi geliştirebilirsiniz.
    9. Dinleme Becerilerinizi Geliştirme: İngilizce konuşulan müzik, podcast'ler ve videoları dinleyerek dinleme becerilerinizi güçlendirebilirsiniz.
    10. Hata Yapmaktan Korkma: Dil öğrenirken hatalar kaçınılmazdır. Hataları bir öğrenme fırsatı olarak görün ve cesurca iletişim kurmaktan korkmayın.
    Bu yöntemleri kullanarak, İngilizce öğrenme sürecinizi daha etkili ve keyifli hale getirebilirsiniz. Unutmayın ki sabır ve düzenlilik başarınızı artırmada önemlidir.
    `,
    href: "/sifirdan",
    createdAt: "2024-05-16T06:45:00.000+02:00",
    author: "Necati Kavur",
  },
  {
    title:
      "İngilizce Öğrenirken Yapılan 7 Yanlış ve Bunların Yerine Yapabileceğiniz Aktiviteler",
    image:
      "https://storage.acerapps.io/app-1509/WhatsApp%20Image%202024-05-03%20at%2011.28.00.jpeg",
    content: `Neredeyse dil öğrenen herkesin yakındığı “bu sözcükleri biliyorum ancak konuşurken aklıma gelmiyor” veya “farklı aksanları anlamakta zorlanıyorum” gibi durumlardan kaçınmak için ve konuşmanızı geciktiren yanlışların önüne geçmek için aşağıda sıraladığım 7 duruma göz atabilirsiniz. Bu pratikleri kullanarak ne gibi bir ilerleme kaydettiğini bizimle sosyal medyadan paylaşmayı unutmayın 😊
      1.❌ Hatalardan Korkmak ve Konuşmaktan Kaçınmak: Kelimeyi yanlış telaffuz etme veya yanlış türde cümleler kurma kaygısıyla hata yapmaktan korkmak ve bu sebepten İngilizce konuşmaktan kaçınmak, gelişiminizi engelleyebilir.
      ✨ Çözüm: Konuşmaktan çekinmeyin, çünkü hepimiz hatalarımız sayesinde daha çok şey öğreniriz; ayrıca yeni bir dil öğrenirken hata yapmak oldukça normal. Günlük hayatınıza İngilizce konuşma pratiklerini dahil edin. Örneğin; dışarıda kahve alırken İngilizce sipariş edebilirsiniz veya birlikte konuşabileceğiniz bir dil partneri ile düzenli olarak görüşebilirsiniz.
      2.❌ Dilbilgisini göz ardı etmek: Bazı öğrenciler dilbilgisi kurallarını öğrenmek yerine kelime edinmeye öncelik verebilir. Kelime bilgisi önemli olsa da dil bilgisinin ihmal edilmesi kafa karışıklığına ve yanlış kullanıma yol açabilir.
      ✨ Çözüm: Grammar konuları için zaman ayırıp bunları öğrenmeye çalışın. Bu kuralları ve yapıları cümle içinde kullanma alıştırması yapın. Her ne kadar bunun için kullanabileceğiniz uygulamalar bulunsa da, anadili konuşanlardan veya dil eğitmenlerinden geri bildirim almayı ihmal etmeyin.
      3.❌ Aktif Dinleme Yapmamak : Pasif bir şekilde dinlemek, anlama ve konuşma becerilerinizi geliştirmekte yetersizdir. Dinlerken, söylenen şeye odaklı olmadığınızda konuşulanı anlamanız zorlaşacaktır. 
      ✨ Çözüm: Dinlerken not alın, tekrar edin ve anladığınızı doğrulayın. Arada duyduğunuz kelimeleri yazmayı deneyebilirsiniz, böylece gördüğünüz kelimelerin doğru okunuşlarını da anlamanız kolaylaşacaktır. Ayrıca farklı aksanları ve hızları olan İngilizce materyaller dinleyerek dinleme becerilerinizi çeşitlendirin.
      4.❌ Uygulama eksikliği: Bir dili öğrenmek tutarlı bir uygulama gerektirir, ancak bazı öğrenciler düzenli uygulamaya yeterli zaman veya çaba ayırmayabilir.
      ✨ Çözüm: Dil öğrenmeyi günlük bir alışkanlık haline getirin. Hedef dilde dinleme, konuşma, okuma ve yazma pratikleri yapmak için her gün özel bir zaman ayırın. Düzenli olarak pratik yapmak için dil öğrenme uygulamalarını, çevrimiçi kaynakları ve dil değişim platformlarını kullanın.
      5.❌ Tek bir beceriye çok fazla odaklanmak: Bazı öğrenciler, kelime bilgisi veya dinlediğini anlama gibi dil öğreniminin yalnızca bir yönüne odaklanırken konuşma veya yazma gibi diğer becerileri ihmal edebilir.
      ✨ Çözüm: Dil öğrenimine dengeli bir yaklaşım için çabalayın. Genel yeterliliğinizi geliştirmek için dört dil becerisinin (dinleme, konuşma, okuma ve yazma) tamamını düzenli olarak uygulayın.
      6.❌ Kelime Ezberlemeye Dayalı Öğrenme: Sadece kelime ezberlemeye odaklanmak, kelimelerin gerçek kullanımını anlamadan dilin içine sinmesini engelleyebilir.
      ✨Çözüm: Kelimeleri ezberlemek yerine, onları cümleler içinde kullanarak öğrenin. Kelimelerin anlamlarını, kullanımlarını ve deyimlerini öğrenmek için öyküler okuyun veya kelime kartları oluşturun.
      7.❌ Günlük Pratik Yapmayı İhmal Etmek: Haftada bir veya iki kez İngilizce çalışmak, dil becerilerinizi sürdürmek için yeterli olmayabilir.
      ✨ Çözüm: Bir dil günlüğü tutun, günlük olarak kısa metinler yazın veya İngilizce bloglar okuyun. Gördüğünüz veya duyduğunuz kelimeleri belirleyip bunları gün içinde yazdığınız metinde kullanın. Her gün düzenli olarak 15-30 dakika zaman ayırarak, dilinizi sürekli geliştirebilirsiniz.
      Eğer bunları yapmak istiyor ancak nereden başlayacağını veya nasıl program oluşturacağını bilemiyorsan, benimle veya kurumumuzdaki başka bir öğretmen ile çalışmaya başlayabilirsin. Keep learning, you’ve got this!`,
    href: "/yeni-bir-egitim-yaratiyoruz",
    createdAt: "2024-09-27T06:45:00.000+02:00",
    author: "Yagmur Bilgec",
  },
  {
    title: "İşte İngilizcenizi Geliştirebileceğiniz Bazı Çizgi Film Önerileri!",
    image: "https://storage.acerapps.io/app-1509/539343.jpg",
    content: `
    ngilizce geliştirmek için çizgi film izlemek harika bir yol olabilir! İşte bazı çizgi film önerileri:
    1. *SpongeBob SquarePants:* Bu çocukların ve yetişkinlerin keyifle izleyebileceği komik bir çizgi film. İngilizce konuşulan karakterlerin etkileyici aksanları vardır.
    2. *Adventure Time:* Bu çizgi film, eğlenceli diyaloglar ve farklı aksanları içerir. Kelimelerin ve ifadelerin nasıl kullanıldığını öğrenmek için faydalı olabilir.
    3. *The Simpsons:* Bu klasik çizgi film, Amerikan kültürünü ve dilini eğlenceli bir şekilde yansıtır. İzlerken çeşitli kelime ve ifadeleri yakalayabilirsiniz.
    4. *Rick and Morty:* Bu bilim kurgu komedisi, zekice yazılmış diyaloglar ve karmaşık kelime oyunları içerir. İngilizce kelime dağarcığınızı geliştirebilirsiniz.
    5. *South Park:* Bu çizgi film, çeşitli aksanları ve kültürel referansları içerir. Dil becerilerinizi sınamak için iyi bir seçenek olabilir.
    6. *Family Guy:* Bu çizgi film, mizah ve kelime oyunlarına dayalıdır. İzlerken farklı ifadeleri ve dil kullanımını öğrenmek mümkün olabilir.
    7. *BoJack Horseman:* Bu çizgi film, karmaşık karakter gelişimi ve duygusal diyalogları içerir. İngilizceyi daha derinlemesine anlamak için kullanışlı olabilir.
    Bu çizgi filmleri izlerken İngilizce altyazıları açabilir veya İngilizce dublajlı versiyonlarını tercih edebilirsiniz. Ayrıca, kelime dağarcığınızı geliştirmek ve telaffuzunuza yardımcı olmak için çizgi filmlerdeki konuşmaları tekrarlayabilirsiniz.
    `,
    href: "/cizgifilmler",
    createdAt: "2024-02-19T06:45:00.000+02:00",
    author: "Merve Saman",
  },
  {
    title: "Ders Çalışma Planında Mutlaka Olması Gerekenler",
    image: "https://storage.acerapps.io/app-1509/study(2).jpg",
    content: `
    Ders Çalışma Planında Mutlaka Olması Gerekenler
        🙌Her gün 4 beceriye yönelik,şu kaynaklardan ilgi alanına göre seçebilirsin;(hadi hemen kalemi kağıda eline al not et
        ✅Listening için
        🌟lyricstraining.com
        🌟esl-lab.com
        🌟elllo.org
        ✅Speaking için
        🌟British Council Teens
        🌟English Club
        🌟BBC Learning
        🌟Talk English
        ✅Writing için
        🌟Grammarly.com
        🌟Ludwig.guru
        🌟paperrater.com
        ✅Reading için
        🌟els-bits.net
        🌟adapted-English-books.site
        🌟manybooks.net
        🌟breakingnewsenglish.com
        🌟readpoopfiction.com
        🌟british council teens
        ✅Kelime çalışması için;
        🌟rh+ sözlük
        🌟merriam webster
        ✅Toefl-ielts-yökdil çalışması için;
        🌟Atlas uygulaması
        🌟Grammarbank.com
        🌟engvid.com
    `,
    href: "/dersprogrami",
    createdAt: "2024-02-14:45:00.000+02:00",
    author: "Mustafa Kadir",
  },
  {
    title: "Ingilizce Öğrenmeye Sıfırdan Başlayanlar İçin Bazı Yöntemler",
    image:
      "https://storage.acerapps.io/app-1509/woman-teaching-students-english-lesson-online%20(1)%20(1).jpg",
    content: `
    İngilizce öğrenmeye sıfırdan başlayanlar için bazı yöntemler:
    1. Düzenli Pratik Yapma: Her gün belirli bir süre İngilizce konuşma veya yazma pratiği yapmak, dil becerilerinizi geliştirmenize yardımcı olur.
    2. Dil Kurslarına Katılma: Yerel dil kurslarına veya online dil kurslarına katılarak profesyonel rehberlik ve yapıcı geri bildirim alabilirsiniz.
    3. Dil Değiştirme Pratiği: İngilizceyi günlük yaşamınıza dahil etmek için mümkün olduğunca dil değiştirme pratiği yapın. Örneğin, İngilizce haberleri izleyin veya İngilizce podcast'ler dinleyin.
    4. Kelime Kartları Kullanma: Yeni kelimeleri öğrenmek ve ezberlemek için kelime kartları kullanabilirsiniz.
    5. Yazma Alıştırmaları: Günlük günlük tutmak veya makaleler yazmak gibi yazma alıştırmaları yaparak yazma becerilerinizi geliştirebilirsiniz.
    6. Dil Değişim Partneri Bulma: Dil değişim partneri ile pratik yapmak, İngilizce konuşma yeteneklerinizi artırabilir. Kendi dilinizi öğretmeye çalışan birinin size kendi dilini öğretmesi gibi.
    7. Dil Öğrenme Uygulamaları: İngilizce öğrenme uygulamaları, oyunlar ve çevrimiçi kaynaklar, dil öğrenme sürecinizi eğlenceli ve etkili bir şekilde destekleyebilir.
    8. Dil Kitapları Okuma: İngilizce romanlar, öyküler veya makaleler okuyarak hem kelime dağarcığınızı genişletebilir hem de okuma becerilerinizi geliştirebilirsiniz.
    9. Dinleme Becerilerinizi Geliştirme: İngilizce konuşulan müzik, podcast'ler ve videoları dinleyerek dinleme becerilerinizi güçlendirebilirsiniz.
    10. Hata Yapmaktan Korkma: Dil öğrenirken hatalar kaçınılmazdır. Hataları bir öğrenme fırsatı olarak görün ve cesurca iletişim kurmaktan korkmayın.
    Bu yöntemleri kullanarak, İngilizce öğrenme sürecinizi daha etkili ve keyifli hale getirebilirsiniz. Unutmayın ki sabır ve düzenlilik başarınızı artırmada önemlidir.
    `,
    href: "/sifirdan",
    createdAt: "2024-05-16T06:45:00.000+02:00",
    author: "Necati Kavur",
  },
];

const BlogPage = () => {
  const {getBlogsApi} = useBlogServices();
  const blogs = useSelector(state=> state.blog.blogs);
  console.log('blogs', blogs)

  useEffect(() => {
    getBlogsApi();
  },[])

  return (
    <div>
      <Banner path="/images/blog.jpg" title="BLOG" />
      <div className="max-w-6xl mx-auto px-2 mb-16 flex flex-col gap-5">
        {/* main blog */}
        <h5 className=" mb-10 text-lg lg:text-xl font-bold roboto-font  border-b-4 border-dark-red pb-5 ">
          LAST POST
        </h5>
        {<MainBlogCard blog={blogs[0]} />}
        {/* 3 blog */}
        <h5 className="mt-20 mb-10 text-lg lg:text-xl font-bold roboto-font  border-b-4 border-dark-red pb-5 ">
          RECENT POSTS
        </h5>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.slice(1, 4).map((blog, idx) => (
            <RecentBlogCard key={idx} blog={blog} />
          ))}
        </div>

        {/* kalanlar */}
      </div>

      {/* green part */}
      <div className="bg-light-orange py-5  mb-16 flex flex-col gap-5">
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4   gap-10 lg:gap-6 max-w-6xl mx-auto px-2 ">
          <div className="col-span-1  hidden lg:block ">
            <WithBgBlogCard blog={blogs[1]} isSmall={true} />
          </div>
          <div className="col-span-1 block lg:hidden  ">
            <WithBgBlogCard blog={blogs[1]} isSmall={false} />
          </div>
          <div className="cols-span-1 sm:col-span-2 -order-1 lg:order-none mb-10 lg:mb-0  ">
            <WithBgBlogCard blog={blogs[2]} isSmall={false} />
          </div>
          <div className="col-span-1 hidden lg:block ">
            <WithBgBlogCard blog={blogs[3]} isSmall={true} />
          </div>
          <div className="col-span-1 block lg:hidden ">
            <WithBgBlogCard blog={blogs[3]} isSmall={false} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2 mb-24 flex flex-col gap-5">
        {/* 3 blog */}
        <h5 className="mt-20 mb-10 text-lg lg:text-xl font-bold roboto-font  border-b-4 border-dark-red pb-5 ">
          REST OF THE POSTS
        </h5>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.slice(7).map((blog, idx) => (
            <RecentBlogCard key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
