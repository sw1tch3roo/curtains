import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_ROUTE } from '../../utils/consts';
import './Footer.scss';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const nav = (route: string) => {
    window.scrollTo(0, 0); // перемещаем окно в исходное положение

    navigate(route);
  };

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="main_content">
        <footer>
          <div className="footer">
            <div className="row">
              <a href="https://vk.com">
                <i className="fa fa-whatsapp"></i>
              </a>
              <a href="https://vk.com">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="https://vk.com">
                <i className="fa fa-instagram"></i>
              </a>
            </div>

            <div className="row">
              <ul>
                <li>
                  <p onClick={() => nav(CONTACTS_ROUTE)}>Контакты</p>
                </li>
                {/* <li>
                  <a href="https://vk.com`">Our Services</a>
                </li> */}
                <li>
                  <p onClick={() => nav(CONTACTS_ROUTE)}>Политика конфиденциальности</p>
                </li>
                <li>
                  <p onClick={() => nav(CONTACTS_ROUTE)}>Условия и положения</p>
                </li>
                {/* <li>
                  <a href="https://vk.com`">Career</a>
                </li> */}
              </ul>
            </div>

            <div className="row">AURA Copyright © 2023 Aura - Все права защищены</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
