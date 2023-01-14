import NotFoundBlock from './components/notFoundBlock/NotFoundBlock';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import { CONTACTS_ROUTE, SHOP_ROUTE } from './utils/consts';

export const publicRoutes: Array<{
  path: string | any;
  element: JSX.Element;
}> = [
  { path: SHOP_ROUTE, element: <Home /> },
  { path: CONTACTS_ROUTE, element: <Contacts /> },

  { path: '*', element: <NotFoundBlock /> },
];
