import AdminTabs from "./components/AdminTabs";

import Banner from "@/components/banner/Banner";

export const metadata = {
  title: "LinguaPlus Akademi | Admin Panel",
  description: "Learn English with LinguaPlus",
};

const Adminpanel = ({ children }) => {
  return (
    <div>
      {/* <Banner path="/images/blog.jpg" title="Admin Panel" /> */}
      <Banner path="https://res.cloudinary.com/dkhuhh8xl/image/upload/v1736363827/blog_k2zbfs.jpg" title="Admin Panel" />
      <AdminTabs />
      {children}
    </div>
  );
};

export default Adminpanel;
