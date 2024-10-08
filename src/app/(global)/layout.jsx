"use client";
import { persistor, store } from "@/lib/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const GlobalLayout = ({ children }) => {
  console.log("global layout");
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default GlobalLayout;
