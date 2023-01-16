import React from 'react';
import { useSelector } from 'react-redux';
import { itemsSelector } from '../redux/slices/itemsSlice';

import CurtainsItem from '../components/curtainsItem/CurtainsItem';

import styles from '../components/curtainsItem/CurtainsItem.module.scss';

const Home: React.FC = () => {
  const { items } = useSelector(itemsSelector);

  const curtains = items.map((curtain: any) => <CurtainsItem key={curtain.id} {...curtain} />);

  return <div className={styles.portfolio_wrap}>{curtains}</div>;
};

export default Home;
