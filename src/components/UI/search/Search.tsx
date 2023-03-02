import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { changeSearchValue } from '../../../redux/slices/filterSlice';
import { useAppDispatch } from '../../../redux/store';

const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>(''); // локальный стейт для быстрого отображения данных в инпуте
  const dispatch = useAppDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null); // для выбора DOM-элемента
  // reference - ссылка

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(changeSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // меняем значение локального стейта
    updateSearchValue(event.target.value); // передаем данные (отложенное выполнение функции) в хранилище для отправки запроса
  };

  // каждый раз при изменении состояния компонент производит ререндер
  // из-за этого все переменные и функции внутри компонента пересоздаются
  // что приводит к неправильной работе некоторых функций
  // для того, чтобы жс понимал, что ссылка на место в памяти функции не меняется
  // применяется хук useCallback

  return (
    <div className={styles.main}>
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value} // реакт рекомендует хранить изменяющееся значение
        // чтобы в ДОМ-элементе происходили изменения
        // т.е. если мы произведем очистку, то значение searchValue изменится (в App.js)
        // но input об этом ничего не узнает, поэтому мы и передаем в value его значение
        onChange={(event) => onChangeInput(event)}
        // при каждом изменении состояния вызывается фукнция
        // в данном случае при каждом вводе какого-либо символа строка будет сохраняться в searchValue
        className={styles.input}
        placeholder="Поиск..."
      />
      {value && ( // если есть какое-либо значение, выводим иконку очистки
        <svg
          className={styles.iconClear}
          onClick={() => {
            dispatch(changeSearchValue(''));
            setValue('');
            // if (inputRef.current) {
            //   inputRef.current.focus();
            // }
            inputRef.current?.focus(); // если не null, тогда выполняется
            // inputRef.current - содержит JSX-элемент (инпут)
            // focus - фокусировка на инпуте
          }}
          viewBox="0 0 88 88"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60.38,70.21H27.62V32.53h3.27V66.94H57.11V32.53h3.27ZM24.34,26H63.66v3.27H24.34Z" />
          <path d="M52.19,29.25H35.81V17.79H52.19ZM39.08,26h9.84V21.06H39.08ZM37.45,37.45h3.27V60.38H37.45Zm9.83,0h3.27V60.38H47.28Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
