import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { currentUserInfo } from 'redux/Auth/AuthOperations';
import Header from 'shared/Header/Header';

import { PrivateRoute } from 'shared/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'shared/PublicRoute/PublicRoute';

const AuthPage = lazy(() => import('pages/AuthPage/AuthPage'));
const AwardsPage = lazy(() => import('pages/AwardsPage/AwardsPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const PlanningPage = lazy(() => import('pages/PlanningPage/PlanningPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserInfo());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            />
            <Route
              path="/planning"
              element={
                <PrivateRoute>
                  <PlanningPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/awards"
              element={
                <PrivateRoute>
                  <AwardsPage />
                </PrivateRoute>
              }
            />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
