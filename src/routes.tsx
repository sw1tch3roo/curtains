import NotFoundBlock from './components/notFoundBlock/NotFoundBlock';
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import Privacy from './pages/privacy/Privacy';
import Product from './pages/product/Product';
import { CONTACTS_ROUTE, PRIVACY_ROUTE, PRODUCTS_ROUTE, SHOP_ROUTE } from './utils/consts';

export const publicRoutes: Array<{
  path: string | any;
  element: JSX.Element;
}> = [
  { path: SHOP_ROUTE, element: <Home /> },
  { path: CONTACTS_ROUTE, element: <Contacts /> },
  { path: `${PRODUCTS_ROUTE}/:productId`, element: <Product /> },
  // адрес статический, но далее динамический адрес (:id)
  { path: `${PRIVACY_ROUTE}`, element: <Privacy /> },

  { path: '*', element: <NotFoundBlock /> },
];
