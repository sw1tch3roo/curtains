import NotFoundBlock from './components/notFoundBlock/NotFoundBlock';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Product from './pages/Product';
import { CONTACTS_ROUTE, PRODUCTS_ROUTE, SHOP_ROUTE } from './utils/consts';

export const publicRoutes: Array<{
  path: string | any;
  element: JSX.Element;
}> = [
  { path: SHOP_ROUTE, element: <Home /> },
  { path: CONTACTS_ROUTE, element: <Contacts /> },
  { path: `${PRODUCTS_ROUTE}/:productId`, element: <Product /> },
  // адрес статический, но далее динамический адрес (:id)
  { path: '*', element: <NotFoundBlock /> },
];
