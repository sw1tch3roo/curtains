import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    // модульная методология
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.error}>
          <h1>
            <span>😣</span>
            <br />
            Ничего не найдено :(
          </h1>
        </div>
        <div className={styles.error_description}>
          <p>К сожалению, данная страница отсутствует.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
