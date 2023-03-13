import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from './slices/itemsSlice';
import contactsDataReducer from './slices/contactsSlice';
import filterReducer from './slices/filterSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// хранилище редакса
export const store = configureStore({
  // вся логика редакса в данном объекте
  reducer: {
    itemsReducer,
    contactsDataReducer,
    filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
