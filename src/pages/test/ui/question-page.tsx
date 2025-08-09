import { FC } from 'react';
import { useMatchMedia } from '~shared/lib/hooks';
import { DesktopQuestionPage } from './desktop-question-page/desktop-question-page.tsx';

export const QuestionPage: FC = () => {
  const { isDesktop, isMobile } = useMatchMedia();

  return <>{isDesktop && <DesktopQuestionPage />}</>;
};
