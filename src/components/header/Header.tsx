import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { ABOUT_ROUTE, CONTACTS_ROUTE, PRICE_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();

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
          <li onClick={() => navigate(SHOP_ROUTE)}>Продукция</li>
          <li onClick={() => navigate(ABOUT_ROUTE)}>О салоне</li>
          <li onClick={() => navigate(CONTACTS_ROUTE)}>Контакты</li>
          <li onClick={() => navigate(PRICE_ROUTE)}>Цены</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
