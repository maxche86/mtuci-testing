import { FC } from 'react';
import { useMatchMedia } from '~shared/lib/hooks';
import { DesktopResultsPage } from './desktop-results-page/desktop-results-page.tsx';

export const ResultsPage: FC = () => {
  const { isDesktop, isMobile } = useMatchMedia();

  return <div>{isDesktop && <DesktopResultsPage />}</div>;
};
