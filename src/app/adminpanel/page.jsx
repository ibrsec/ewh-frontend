"use client";

import Banner from "@/components/banner/Banner";
import MainBlogCard from "./components/MainBlogCard";
import RecentBlogCard from "./components/RecentBlogCard";
import WithBgBlogCard from "./components/WithBgBlogCard";
import { Provider } from "react-redux";
import { persistor, store } from "@/lib/store";
import PersistReducer from "redux-persist/lib/persistReducer";

const Adminpanel = () => {
  return (
    <div>
      <Banner path="/images/blog.jpg" title="Admin Panel" />

      <Provider store={store}>
        <PersistReducer loading={null} persistor={persistor}></PersistReducer>
      </Provider>
    </div>
  );
};

export default Adminpanel;
