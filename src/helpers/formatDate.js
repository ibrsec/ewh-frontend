const aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  export const formatliTarih = (date) => {
    const tarih = new Date(date); // Ocak 24, 2024
    const gun = tarih.getDate();
    const ay = aylar[tarih.getMonth()];
    const yil = tarih.getFullYear();
  
    const formatliTarih = `${ay} ${gun}, ${yil}`;
  
    return formatliTarih;

  }