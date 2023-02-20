import React from 'react';
import styles from './App.module.scss';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
};

export default App;
