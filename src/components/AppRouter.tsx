import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const auth = false;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path={'/login'} element={<Navigate replace to='/' />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path={'/'} element={<Navigate replace to='/login' />} />
    </Routes>
  );
};

export default AppRouter;

// {
//   privateRoutes.map((route) => (
//     <Route key={route.path} path={route.path} element={<route.component />} />
//   ));
// }
// <Route
//   path={RoutNames.NAVIGATE}
//   element={<Navigate replace to={RoutNames.EVENT} />}
// />;
