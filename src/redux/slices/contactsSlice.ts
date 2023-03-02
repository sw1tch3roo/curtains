import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import phone_logo from '../../assets/img/phone_logo.svg';
import mail_logo from '../../assets/img/mail_logo.svg';
import telegram_logo from '../../assets/img/telegram_logo.svg';
import { RootState } from '../store';

interface IContactsData {
  id: number;
  logo: string;
  firstTitle: string;
  secondTitle: string;
  linkTo: string;
  linkTitle: string;
}

const contactsData: IContactsData[] = [
  {
    id: 0,
    logo: phone_logo,
    firstTitle: 'Хотите связаться для заказа?',
    secondTitle: 'Позвоните нам',
    linkTo: '',
    linkTitle: '89207657081',
  },

  {
    id: 1,
    logo: mail_logo,
    firstTitle: 'Можете написать на почту',
    secondTitle: 'Мы открыты для любых вопросов',
    linkTo: 'https://',
    linkTitle: 'chi3fno1d@gmail.com',
  },

  {
    id: 2,
    logo: telegram_logo,
    firstTitle: 'Пишите в телеграм',
    secondTitle: 'В нашем чате мы поможем оформить заказ',
    linkTo: '',
    linkTitle: 'Ссылка на телеграм чат',
  },
];

const initialState = {
  // изначальное состояние
  contactsData: contactsData,
};

export const contactsSlice = createSlice({
  name: 'contactsData', // имя слайса
  // то есть сюда передастся значение из объекта initialState
  initialState, // initialState: initialState  первое состояние (как в useState)
  reducers: {
    // методы, меняющие состояние
    setContactsData: (state, action: PayloadAction<IContactsData[]>) => {
      state.contactsData = action.payload;
    },
  },
});

export const contactsDataSelector = (state: RootState) => state.contactsDataReducer;

export const { setContactsData } = contactsSlice.actions;
// экспортированные методы нами же созданные

export default contactsSlice.reducer; // обработка всего стейта
