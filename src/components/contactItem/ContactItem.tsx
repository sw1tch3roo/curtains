import React from 'react';
import styles from '../contactsBlock/ContactsBlock.module.scss';

interface IContactsData {
  id: number;
  logo: string;
  firstTitle: string;
  secondTitle: string;
  linkTo: string;
  linkTitle: string;
}

const ContactItem: React.FC<IContactsData> = ({
  id,
  logo,
  firstTitle,
  secondTitle,
  linkTo,
  linkTitle,
}) => {
  return (
    <div className={styles.block_item}>
      <div className={styles.block_item_picture}>
        <div className={styles.block_item_image}>
          <img src={logo} width="80px" height="80px" alt="телефон" />
        </div>
      </div>
      <div className="block_item_text">
        <h3>{firstTitle}</h3>
        <br />
        <b>{secondTitle}</b>
        <br />
        <a href={linkTo}>{linkTitle}</a>
      </div>
    </div>
  );
};

export default ContactItem;
