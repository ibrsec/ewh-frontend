 
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


import { combineReducers, configureStore } from "@reduxjs/toolkit"; 


import emailSlice from "./features/emailSlice";
import teamSlice from "./features/teamSlice";
import authSlice from "./features/authSlice";
import trainingSlice from "./features/trainingSlice";
import blogSlice from "./features/blogSlice";
import contactSlice from "./features/contactSlice";



 
const rootReducer = combineReducers({ 
    email:emailSlice,
    team:teamSlice,
    auth:authSlice,
    training:trainingSlice,
    blog:blogSlice,
    contact:contactSlice,
  });
  

const persistConfig = {
    key: 'ewhRoot',
    storage
} 
  
 
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === "dev",
  });
  
  export const persistor = persistStore(store);
  





 