import Banner from "@/components/banner/Banner";
import ContactForm from "./components/ContactForm";
import ContactContent from "./components/ContactContent";
import ContactInfos from "./components/ContactInfos";
import ContactInfoCards from "./components/ContactInfoCards";

const ContactPage = () => {
  return (
    <div className="mb-52">
      <Banner path="/images/contact.jpg" title="İLETİŞİM" />

      <div className="max-w-6xl mx-auto px-2 mb-32 flex gap-20 flex-col md:flex-row">
        <div className="flex-1  rounded-lg shadow-xl border border-dark-red shadow-dark-red py-8 px-2">
          <ContactForm />
        </div>
        <div className="flex-1">
          <ContactContent />
        </div>
      </div>

      {/* contact infos */}
      <div className="relative">
        <div className="bg-dark-red h-[400px] w-full flex items-center justify-center ">
          <ContactInfos />
        </div>
        <ContactInfoCards />
      </div>
    </div>
  );
};

export default ContactPage;
