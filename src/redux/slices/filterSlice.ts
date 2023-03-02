import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
}

export type SortType = {
  name: string; // по умолчанию будет
  sortProperty: SortPropertyEnum.TITLE_DESC | SortPropertyEnum.TITLE_ASC;
};

interface IFilterState {
  searchValue: string;
  category: number;
  sort: SortType;
  currentPage: number;
}

const initialState: IFilterState = {
  // изначальное состояние
  searchValue: '',
  category: 0,
  sort: {
    name: 'по алфавиту ↓', // по умолчанию будет
    sortProperty: SortPropertyEnum.TITLE_DESC,
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filters', // имя слайса для корр
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    changeCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },

    changeSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },

    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setFilters(state, action) {
      // вшиваем данные из поисковой строки
      if (Object.keys(action.payload).length) {
        state.category = Number(action.payload.activeCategory);
        state.sort = action.payload.sort;
        state.currentPage = Number(action.payload.currentPage);
      } else {
        state.currentPage = 1;
        state.category = 0;
        state.sort = {
          name: 'по алфавиту ↓', // по умолчанию будет
          sortProperty: SortPropertyEnum.TITLE_DESC,
        };
      }
    },
  },
});

export const filterSelector = (state: RootState) => state.filterReducer;
export const filterSortSelector = (state: RootState) => state.filterReducer.sort;
export const searchSelector = (state: RootState) => state.filterReducer.searchValue;

export const { changeCategory, changeSort, changePage, changeSearchValue, setFilters } =
  filterSlice.actions; // вытаскиваем из экшнов определенные методы
// экспортированные методы нами же созданные

export default filterSlice.reducer; // обработка всего стейта
