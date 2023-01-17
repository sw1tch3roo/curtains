import React from 'react';
import phone_logo from '../../assets/img/phone_logo.svg';
import styles from './Contacts.module.scss';

const ContactsBlock: React.FC = () => {
  return (
    <div>
      <div className={styles.section}>
        <h2 className={styles.section_title}>Контактные данные</h2>
        <div className={styles.block}>
          <div className={styles.block_item}>
            <div className={styles.block_item_picture}>
              <div className={styles.block_item_image}>
                <img src={phone_logo} width="80px" height="80px" alt="" />
              </div>
            </div>
            <div className="block_item_text">
              <h3>Напишите нам</h3>
              <br />
              <b>Идеи?</b>
              <br />
              <b>Ми открыти</b>
              <br />
              <a href="https://vk.com/sw1tch3roo">sw1tch3roo</a>
            </div>
          </div>
          <div className={styles.block_item}>
            <div className={styles.block_item_picture}>
              <div className={styles.block_item_image}>
                <img src={phone_logo} width="80px" height="80px" alt="" />
              </div>
            </div>
            <div className="block_item_text">
              <h3>Напишите нам</h3>
              <br />
              <b>Идеи?</b>
              <br />
              <b>Ми открыти</b>
              <br />
              <a href="https://vk.com/sw1tch3roo">sw1tch3roo</a>
            </div>
          </div>
          <div className={styles.block_item}>
            <div className={styles.block_item_picture}>
              <div className={styles.block_item_image}>
                <img src={phone_logo} width="80px" height="80px" alt="" />
              </div>
            </div>
            <div className="block_item_text">
              <h3>Напишите нам</h3>
              <br />
              <b>Идеи?</b>
              <br />
              <b>Ми открыти</b>
              <br />
              <a href="https://vk.com/sw1tch3roo">sw1tch3roo</a>
            </div>
          </div>
        </div>
        <div className={styles.block_map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadb4e26156fb3938400bc1e60ebbb1e541d300c0d34b5f0ce0433651125f67fb&amp;source=constructor"
            width="700"
            height="600"
            frameBorder="0"
            title="Карта салона"
          ></iframe>
        </div>
      </div>
      {/* <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acac3daa194c6e832fc920b6f2968e98cffa04453baa348d376aec4b152c5d91f&amp;source=constructor"
        width="100%"
        height="606"
        frameborder="0"
        class="hidden-phone"
      />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acac3daa194c6e832fc920b6f2968e98cffa04453baa348d376aec4b152c5d91f&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        class="hidden-tablet hidden-desctop"
      ></iframe> */}
    </div>
  );
};

export default ContactsBlock;
