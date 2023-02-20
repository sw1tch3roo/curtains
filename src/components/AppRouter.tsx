import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import { publicRoutes } from '../routes';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Родительский шаблон */}
      <Route path="/" element={<MainLayout />}>
        {publicRoutes.map(({ path, element }, key) => {
          return <Route path={path} element={element} key={key} />;
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;
