import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from './slices/itemsSlice';

// хранилище редакса
export const store = configureStore({
  // вся логика редакса в данном объекте
  reducer: {
    itemsReducer,
  },
});
