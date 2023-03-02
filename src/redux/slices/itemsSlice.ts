import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface IParams {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: number;
}

export const fetchItems = createAsyncThunk<Items[], IParams>(
  'items/fetchItemsStatus',
  async (params, thunkApi) => {
    const { category, sortBy, order, search, currentPage } = params; // деструктуризируем

    const { data } = await axios.get<Items[]>(
      `https://63c7ed555c0760f69ac121f6.mockapi.io/products?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}&${search}`,
    );

    return data;

    // if (data.length === 0) {
    //   return thunkApi.rejectWithValue('Товаров нет.');
    // }

    // return thunkApi.fulfillWithValue(data);
  },
);

export enum StatusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Items = {
  id: string;
  image: string[];
  title: string;
  price: number;
  category: number;
};

interface IProductsState {
  items: Items[];
  status: StatusEnum.LOADING | StatusEnum.SUCCESS | StatusEnum.ERROR;
}

const initialState: IProductsState = {
  // изначальное состояние
  items: [],
  status: StatusEnum.LOADING, // loading | success | error - статусы загрузки
};

export const itemsSlice = createSlice({
  name: 'items', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    setItems: (state, action: PayloadAction<Items[]>) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      // отправка запроса
      state.status = StatusEnum.LOADING;
      state.items = []; // очищаем старый массив пицц
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      // отправка запроса
      state.items = action.payload;
      state.status = StatusEnum.SUCCESS;
    });

    builder.addCase(fetchItems.rejected, (state, action) => {
      // отправка запроса
      state.status = StatusEnum.ERROR;
      state.items = []; // очищаем старый массив пицц
    });
  },
});

export const itemsSelector = (state: RootState) => state.itemsReducer;

export const { setItems } = itemsSlice.actions;
// экспортированные методы нами же созданные

export default itemsSlice.reducer; // обработка всего стейта
