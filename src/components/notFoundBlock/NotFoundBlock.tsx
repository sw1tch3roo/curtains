import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    // модульная методология
    <div className={styles.main}>
      <h1>
        <span>😣</span>
        <br />
        Ничего не найдено :(
      </h1>
      <p className={styles.description}>К сожалению, данная страница отсутствует.</p>
    </div>
  );
};

export default NotFoundBlock;
