import { FC } from 'react';
import { Button, Flex, Text } from '@mantine/core';
import { useUserResultStore } from '~entities/user-result';
import { useGoTo } from '~shared/lib/hooks/go-to.ts';
import { onestFontContent } from '~themes/fonts.css.ts';
import * as styles from './results.css.ts';

export const Results: FC = () => {
  const rightAnswer = useUserResultStore.use.rightAnswer();
  const wrongAnswer = useUserResultStore.use.wrongAnswer();
  const skippedAnswer = useUserResultStore.use.skippedAnswer();
  const { goToMainPage } = useGoTo();
  const resetState = useUserResultStore.use.resetState();

  const handelButton = () => {
    resetState();
    goToMainPage();
  };

  return (
    <Flex direction='column' gap='64px' w='809px' align='center'>
      <Flex direction='column' align='center' gap='8px' w='100%'>
        <Text className={onestFontContent.c1} c='#FFFFFF' span>
          Статистика
        </Text>
        <Flex className={styles.resultsContainer}>
          <Flex justify='space-between'>
            <Text span>Правильные ответы</Text>
            <Text span>{rightAnswer}</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text span>Ошибки</Text>
            <Text span>{wrongAnswer}</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text span>Пропущенные</Text>
            <Text span>{skippedAnswer}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap='32px'>
        <Button className={styles.button} onClick={handelButton}>
          Пройти заново
        </Button>
      </Flex>
    </Flex>
  );
};
