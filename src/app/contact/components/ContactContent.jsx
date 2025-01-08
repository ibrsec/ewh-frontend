const ContactContent = () => {
  return (
    <div>
      <h4 className="text-red font-semibold poppins-font opacity-80 mb-2">
        Sorularınız mı Var?
      </h4>
      <h3 className="geist-font text-2xl lg:text-3xl mb-7">
        Bizimle İletişime Geçin!!
      </h3>
      <p className="poppins-font text-sm md:text-md text-gray-800   mb-7    ">
        Kendine, kariyerine ve eğitimine İngilizce öğrenerek yatırım yapmak
        istiyorsanız, LinguaPlus alanında uzman eğitmenleriyle, tamamen size
        uygun esnek ders saatleri ve konforlu bir öğrenme ortamıyla benzersiz
        bir dil öğrenme deneyimi sunuyor. <br /><br />
        Sorularınız için bizimle iletişime geçin ve size özel bir yol haritasını
        birlikte çizelim!
      </p>
      <img
        src="https://res.cloudinary.com/dkhuhh8xl/image/upload/v1736364164/contact_z7empo.png"
        // src="/images/contact.png"
        alt="ekip"
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default ContactContent;
