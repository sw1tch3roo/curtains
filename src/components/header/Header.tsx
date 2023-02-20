import React from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { ABOUT_ROUTE, CONTACTS_ROUTE, PRICE_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const headerButtons = [
    {
      SHOP_ROUTE,
      title: 'Продукция',
    },
    {
      ABOUT_ROUTE,
      title: 'О салоне',
    },
    {
      PRICE_ROUTE,
      title: 'Цены',
    },
    {
      CONTACTS_ROUTE,
      title: 'Контакты',
    },
  ];

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} width="45px" height="45px" alt="Curtains" />
        </div>
      </Link>
      <div className={styles.logo_name}>
        <h1 onClick={() => navigate(SHOP_ROUTE)}>Aura</h1>
        <p onClick={() => navigate(SHOP_ROUTE)}>Салон штор</p>
      </div>
      <div className={styles.menu}>
        <ul>
          {headerButtons.map((arr, index: number) => (
            <li key={index} onClick={() => navigate(Object.values(arr)[0])}>
              {arr.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
