import { FC } from 'react';
import { Flex } from '@mantine/core';
import { TestQuestion } from '~features/test-question';
import styles from './desktop-test-page.module.scss';

export const DesktopTestPage: FC = () => {
  return (
    <Flex direction='column' justify='center' align='center' mt='206px'>
      <TestQuestion />
    </Flex>
  );
};
