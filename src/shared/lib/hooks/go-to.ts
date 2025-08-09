import { useNavigate, NavigateOptions } from 'react-router-dom';
import { PATH } from '~shared/constants/common';

export const useGoTo = () => {
  const navigate = useNavigate();

  const goToMainPageWithReload = () => window.location.replace(PATH.main);
  const goTo = (path: string, options?: NavigateOptions) => navigate(path, options);
  const goBack = () => navigate(-1);
  const goToMainPage = (options?: NavigateOptions) => navigate(PATH.main, options);
  const goToResultsPage = (options?: NavigateOptions) => navigate(PATH.results, options);
  const goToTestPage = (options?: NavigateOptions) => navigate(PATH.test.root, options);
  const goToQuestionPageId = (id: string | number, options?: NavigateOptions) =>
    navigate(PATH.test.questionId(id), options);

  return {
    goToMainPageWithReload,
    goTo,
    goBack,
    goToMainPage,
    goToTestPage,
    goToQuestionPageId,
    goToResultsPage,
  };
};
