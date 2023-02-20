import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // изначальное состояние
  searchValue: '',
  category: 0,
  sort: {
    name: 'по алфавиту ↓', // по умолчанию будет
    sortProperty: 'title',
  },
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filters', // имя слайса для корр
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    changeCategory: (state, action) => {
      state.category = action.payload;
    },

    changeSort(state, action) {
      state.sort = action.payload;
    },

    changePage: (state, action) => {
      state.page = action.payload;
    },

    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setFilters(state, action) {
      // вшиваем данные из поисковой строки
      if (Object.keys(action.payload).length) {
        state.category = Number(action.payload.activeCategory);
        state.sort = action.payload.sort;
        state.page = Number(action.payload.currentPage);
      } else {
        state.currentPage = 1;
        state.category = 0;
        state.sort = {
          name: 'по алфавиту ↓', // по умолчанию будет
          sortProperty: 'title',
        };
      }
    },
  },
});

export const filterSelector = (state) => state.filterReducer;
export const filterSortSelector = (state) => state.filterReducer.sort;
export const searchSelector = (state) => state.filterReducer.searchValue;

export const { changeCategory, changeSort, changePage, changeSearchValue, setFilters } =
  filterSlice.actions; // вытаскиваем из экшнов определенные методы
// экспортированные методы нами же созданные

export default filterSlice.reducer; // обработка всего стейта
