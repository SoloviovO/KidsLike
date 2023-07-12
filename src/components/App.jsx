import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AuthPage from 'pages/AuthPage/AuthPage';
import AwardsPage from 'pages/AwardsPage/AwardsPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import MainPage from 'pages/MainPage/MainPage';
import PlanningPage from 'pages/PlanningPage/PlanningPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { currentUserInfo } from 'redux/Auth/AuthOperations';
import { PrivateRoute } from '../shared/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../shared/PublicRoute/PublicRoute';
import Header from '../shared/Header/Header';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserInfo());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            // path="/main"
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
    </>
  );
};
