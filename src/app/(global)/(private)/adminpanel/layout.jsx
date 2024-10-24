import AdminTabs from "./components/AdminTabs";

import Banner from "@/components/banner/Banner";

export const metadata = {
  title: "English With Hatice | Admin Panel",
  description: "Learn English with Hatice",
};

const Adminpanel = ({ children }) => {
  return (
    <div>
      <Banner path="/images/blog.jpg" title="Admin Panel" />
      <AdminTabs />
      {children}
    </div>
  );
};

export default Adminpanel;
