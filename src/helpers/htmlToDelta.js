import Quill from "react-quill"; // Quill kütüphanesini içe aktar

// HTML'den Delta formatına dönüştüren fonksiyon
export const htmlToDelta = (html) => {
  const quill = new Quill(document.createElement('div'));
  const delta = quill.clipboard.convert(html); // HTML içeriğini Delta'ya çevir
  return delta;
};