import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '~widgets/header';
import { PATH } from '~shared/constants/common';
import { BlockingLoader } from '~shared/ui/components';
import * as styles from './router.css';

const MainPage = lazy(() => import('~pages/main'));
const TestPage = lazy(() => import('~pages/test'));

export const MainRouter: FC = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<BlockingLoader />}>
        <Header />

        <Routes>
          <Route path={PATH.main} element={<MainPage />} />

          <Route path={PATH.test} element={<TestPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export const Router = () => (
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);
