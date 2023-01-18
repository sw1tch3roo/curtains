import React from 'react';
import { useSelector } from 'react-redux';
import { itemsSelector } from '../../redux/slices/itemsSlice';

import styles from '../curtainsItem/CurtainsItem.module.scss';
import CurtainsItem from '../curtainsItem/CurtainsItem';

const CurtainsBlock: React.FC = () => {
  const { items } = useSelector(itemsSelector);
  const curtains = items.map((curtain: any) => <CurtainsItem key={curtain.id} {...curtain} />);

  return <div className={styles.portfolio_wrap}>{curtains}</div>;
};

export default CurtainsBlock;
