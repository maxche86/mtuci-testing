import { FC } from 'react';
import { useMatchMedia } from '~shared/lib/hooks';
import { DesktopTestPage } from '../ui/desktop-test-page/desktop-test-page.tsx';

export const TestPage: FC = () => {
  const { isDesktop, isMobile } = useMatchMedia();

  return <div>{isDesktop && <DesktopTestPage />}</div>;
};
