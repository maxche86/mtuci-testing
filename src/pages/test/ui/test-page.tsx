import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@mantine/core';

export const TestPage: FC = () => {
  return (
    <Flex direction='column' justify='center' align='center' mt='206px'>
      <Outlet />
    </Flex>
  );
};
