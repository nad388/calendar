import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      {/* <Route path={'/login'} element={<Navigate replace to='/' />} /> */}
      <Route
        path={RouteNames.NAVIGATE}
        element={<Navigate replace to={RouteNames.EVENT} />}
      />
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
      {/* <Route path={'/'} element={<Navigate replace to='/login' />} /> */}
      <Route
        path={RouteNames.NAVIGATE}
        element={<Navigate replace to={RouteNames.LOGIN} />}
      />
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
