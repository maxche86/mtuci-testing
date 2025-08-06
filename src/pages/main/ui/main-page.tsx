import { FC } from 'react';
import { useMatchMedia } from '~shared/lib/hooks';
import { DesktopMainPage } from './desktop-main-page/desktop-main-page.tsx';
import { MobileMainPage } from './mobile-main-page/mobile-main-page.tsx';

export const MainPage: FC = () => {
  const { isDesktop, isMobile } = useMatchMedia();

  return (
    <>
      {isMobile && <MobileMainPage />}

      {isDesktop && <DesktopMainPage />}
    </>
  );
};
