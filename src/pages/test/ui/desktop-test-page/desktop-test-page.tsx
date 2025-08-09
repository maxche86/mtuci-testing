import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@mantine/core';

export const DesktopTestPage: FC = () => {
  return (
    <Flex direction='column' justify='center' align='center' mt='206px'>
      <Outlet />
    </Flex>
  );
};
