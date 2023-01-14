import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {/* рендерим все динамические роуты */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
