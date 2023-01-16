import { createSlice } from '@reduxjs/toolkit';
import curtains from '../.././assets/curtains.json';
// import axios from 'axios';

// export const fetchItems = createAsyncThunk('items/fetchItemsStatus', async (params, thunkApi) => {
//   // const { category, sortBy, order, search, currentPage } = params; // деструктуризируем

//   const { data } = await axios.get(
//     `https://632cad725568d3cad88ad212.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`,
//   );

//   if (data.length === 0) {
//     return thunkApi.rejectWithValue('Товаров нет.');
//   }

//   return thunkApi.fulfillWithValue(data);
// });

const initialState = {
  // изначальное состояние
  items: curtains,
  status: 'success', // loading | success | error - статусы загрузки
};

export const itemsSlice = createSlice({
  name: 'items', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },

  // extraReducers: {
  //   [fetchItems.pending]: (state, action) => {
  //     // отправка запроса
  //     state.status = 'loading';
  //     state.items = []; // очищаем старый массив пицц
  //   },

  //   [fetchItems.fulfilled]: (state, action) => {
  //     // console.log(action, 'fulfilled');
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },

  //   [fetchItems.rejected]: (state, action) => {
  //     // console.log(action, 'rejected');
  //     // ошибка запроса
  //     state.status = 'error';
  //     state.items = []; // на всякий случай обнуляем массив
  //   },
  // },
});

export const itemsSelector = (state) => state.itemsReducer;

export const { setItems } = itemsSlice.actions;
// экспортированные методы нами же созданные

export default itemsSlice.reducer; // обработка всего стейта
