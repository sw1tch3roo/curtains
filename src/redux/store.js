import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from './slices/itemsSlice';
import contactsDataReducer from './slices/contactsSlice';

// хранилище редакса
export const store = configureStore({
  // вся логика редакса в данном объекте
  reducer: {
    itemsReducer,
    contactsDataReducer,
  },
});
