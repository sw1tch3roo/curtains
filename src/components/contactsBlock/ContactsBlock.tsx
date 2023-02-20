import React from 'react';
import { useSelector } from 'react-redux';
import { contactsDataSelector } from '../../redux/slices/contactsSlice';
import ContactItem from '../contactItem/ContactItem';
import styles from './ContactsBlock.module.scss';

type ContactsDataType = {
  id: number;
  logo: string;
  firstTitle: string;
  secondTitle: string;
  linkTo: string;
};

const ContactsBlock: React.FC = () => {
  const { contactsData } = useSelector(contactsDataSelector);

  const contacts = contactsData.map((contact: any) => (
    <ContactItem key={contact.id} {...contact} />
  ));

  return (
    <div>
      <div>
        <div className={styles.section}>
          <h2 className={styles.section_title}>Контактные данные</h2>
          <div className={styles.block}>{contacts}</div>
        </div>
        <h3 className={styles.map_title}>Как нас найти?</h3>
        <div className={styles.block_map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadb4e26156fb3938400bc1e60ebbb1e541d300c0d34b5f0ce0433651125f67fb&amp;source=constructor"
            width="75%"
            height="600"
            frameBorder="0"
            title="Карта салона"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
