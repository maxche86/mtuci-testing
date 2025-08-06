import { FC } from 'react';
import { Flex } from '@mantine/core';
import { MainIntroduction } from '~widgets/main-introduction';
import * as styles from './desktop-main-page.css.ts';

export const DesktopMainPage: FC = () => {
  return (
    <Flex className={styles.pageContainer}>
      <Flex mt='238px' direction='column' gap='48px' align='center' justify='center' w='430px'>
        <MainIntroduction />
      </Flex>
    </Flex>
  );
};
