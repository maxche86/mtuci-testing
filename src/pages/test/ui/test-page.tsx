import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { useMatchMedia } from '~shared/lib/hooks';

export const TestPage: FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <Flex direction='column' justify='center' align='center' pt={isMobile ? '60' : '206px'}>
      <Outlet />
    </Flex>
  );
};
