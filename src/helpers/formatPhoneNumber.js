const  formatPhoneNumber = (number) => {
    // Sadece rakamları al
    const digits = number.replace(/\D/g, '');

    // Son 10 haneyi al ve formatla
    const lastTen = digits.slice(-10);
    return `${number.slice(0,number.indexOf("0"))} (${lastTen.slice(0, 3)}) ${lastTen.slice(3, 6)} ${lastTen.slice(6, 8)} ${lastTen.slice(8)}`;
}
export default formatPhoneNumber;