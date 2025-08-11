import { FC, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionPage } from '~pages/test';
import { Header } from '~widgets/header';
import { useUserResultStore } from '~entities/user-result';
import { PATH } from '~shared/constants/common';
import { useGoTo } from '~shared/lib/hooks/go-to.ts';
import { BlockingLoader } from '~shared/ui/components';
import * as styles from './router.css';

const MainPage = lazy(() => import('~pages/main'));
const TestPage = lazy(() => import('~pages/test'));
const ResultsPage = lazy(() => import('~pages/results'));

export const MainRouter: FC = () => {
  const userName = useUserResultStore.use.userName();
  const { goTo } = useGoTo();

  useEffect(() => {
    //Признак того, что пользователь перезагрузил страницу посреди теста. Стор обнулился => начинем тест сначала с другими вопросами.
    if (!userName) {
      goTo('https://maxche86.github.io/mtuci-testing/');
    }
  }, [userName]);

  return (
    <div className={styles.app}>
      <Suspense fallback={<BlockingLoader />}>
        <Header />

        <Routes>
          <Route path={PATH.main} element={<MainPage />} />

          <Route path={PATH.test.root} element={<TestPage />}>
            <Route path={PATH.test.id} element={<QuestionPage />} />
          </Route>

          <Route path={PATH.results} element={<ResultsPage />} />
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
