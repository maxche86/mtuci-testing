import { FC } from 'react';
import { Flex } from '@mantine/core';
import { MainIntroduction } from '~widgets/main-introduction';
import { UserNameInput } from '~features/user-name-input';
import { useMatchMedia } from '~shared/lib/hooks';
import * as styles from './main-page.css.ts';

export const MainPage: FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <Flex className={styles.pageContainer}>
      <Flex
        pt={isMobile ? '138px' : '238px'}
        direction='column'
        gap='48px'
        align='center'
        justify='center'
        w={isMobile ? '245px' : '430px'}
      >
        <MainIntroduction />

        <UserNameInput />
      </Flex>
    </Flex>
  );
};
