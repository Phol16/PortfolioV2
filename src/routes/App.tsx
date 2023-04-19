import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingPage from '../page/LoadingPage';
import Journey from '../components/Journey';
import Information from '../components/Information';
import Skills from '../components/Skills';
const HomePage = React.lazy(() => import('../page/HomePage'));

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
        <Route path='/Journey' element={<Journey />} />
        <Route path='/Information' element={<Information />} />
      </Route>
    </Routes>
  );
}

export default App;
