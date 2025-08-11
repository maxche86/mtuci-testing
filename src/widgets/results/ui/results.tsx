import { FC } from 'react';
import { Button, Flex, Text } from '@mantine/core';
import { useTestStore } from '~entities/test/model/test.store.ts';
import { useUserResultStore } from '~entities/user-result';
import { useMatchMedia } from '~shared/lib/hooks';
import { useGoTo } from '~shared/lib/hooks/go-to.ts';
import { onestFontContent, onestFontTitleBold } from '~themes/fonts.css.ts';
import * as styles from './results.css.ts';

export const Results: FC = () => {
  const { isMobile } = useMatchMedia();
  const rightAnswer = useUserResultStore.use.rightAnswer();
  const wrongAnswer = useUserResultStore.use.wrongAnswer();
  const skippedAnswer = useUserResultStore.use.skippedAnswer();
  const { goToMainPage } = useGoTo();
  const resetUserState = useUserResultStore.use.resetState();
  const resetTest = useTestStore.use.resetTest();

  const scoredPoints = rightAnswer * 5;

  const handelButton = () => {
    resetUserState();
    resetTest();
    goToMainPage();
  };

  return (
    <Flex direction='column' gap='64px' w={isMobile ? '316px' : '809px'} align='center'>
      <Flex direction='column' align='center' gap='8px' w='100%'>
        <Text className={isMobile ? onestFontTitleBold.t2 : onestFontContent.c1} c='#FFFFFF' span>
          Статистика
        </Text>
        <Flex className={isMobile ? styles.resultsContainer.mobile : styles.resultsContainer.desktop}>
          <Flex className={isMobile ? styles.textContainer.mobile : styles.textContainer.desktop}>
            <Text span>Правильные ответы</Text>
            <Text span>{rightAnswer}</Text>
          </Flex>
          <Flex className={isMobile ? styles.textContainer.mobile : styles.textContainer.desktop}>
            <Text span>Ошибки</Text>
            <Text span>{wrongAnswer}</Text>
          </Flex>
          <Flex className={isMobile ? styles.textContainer.mobile : styles.textContainer.desktop}>
            <Text span>Пропущенные</Text>
            <Text span>{skippedAnswer}</Text>
          </Flex>
          <Flex className={isMobile ? styles.textContainer.mobile : styles.textContainer.desktop}>
            <Text span>Баллы</Text>
            <Text span>{scoredPoints}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap='32px'>
        <Button className={isMobile ? styles.button.mobile : styles.button.desktop} onClick={handelButton}>
          Пройти заново
        </Button>
      </Flex>
    </Flex>
  );
};
