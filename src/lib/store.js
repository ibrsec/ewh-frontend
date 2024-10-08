 
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



 
const rootReducer = combineReducers({ 
    email:emailSlice,
    team:teamSlice,
  });
  

const persistConfig = {
    key: 'englishHRoot',
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
  





 