import { FC } from 'react';
import { Flex } from '@mantine/core';
import { MainIntroduction } from '~widgets/main-introduction';
import { TestVariantsSelect } from '~features/test-varints-select/ui/test-variants-select.tsx';
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

        <Flex className={isMobile ? styles.glassContainer.mobile : styles.glassContainer.desktop}>
          <TestVariantsSelect />

          <UserNameInput />
        </Flex>
      </Flex>
    </Flex>
  );
};
