import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingPage from '../page/LoadingPage';
const HomePage = React.lazy(() => import('../page/HomePage'));
const Skills = React.lazy(() => import('../components/Skills'));
const Journey = React.lazy(() => import('../components/Journey'));
const Information = React.lazy(() => import('../components/Information'));

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        }
      >
        <Route
          path='/'
          element={
            <Suspense fallback={<LoadingPage />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path='/Journey'
          element={
            <Suspense fallback={<LoadingPage />}>
              <Journey />
            </Suspense>
          }
        />
        <Route
          path='/Information'
          element={
            <Suspense fallback={<LoadingPage />}>
              <Information />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
