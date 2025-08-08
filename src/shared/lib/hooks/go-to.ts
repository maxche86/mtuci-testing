import { useNavigate, NavigateOptions } from 'react-router-dom';
import { PATH } from '~shared/constants/common';

export const useGoTo = () => {
  const navigate = useNavigate();

  const goToMainPageWithReload = () => window.location.replace(PATH.main);
  const goTo = (path: string, options?: NavigateOptions) => navigate(path, options);
  const goBack = () => navigate(-1);
  const goToMainPage = (options?: NavigateOptions) => navigate(PATH.main, options);
  const goToTestPage = (options?: NavigateOptions) => navigate(PATH.test, options);

  return {
    goToMainPageWithReload,
    goTo,
    goBack,
    goToMainPage,
    goToTestPage,
  };
};
