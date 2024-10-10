import AdminTabs from "./components/AdminTabs";

import Banner from "@/components/banner/Banner";

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
