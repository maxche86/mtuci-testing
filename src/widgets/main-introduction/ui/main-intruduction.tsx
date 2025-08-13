import { FC } from 'react';
import { Flex, Text } from '@mantine/core';
import { useTestStore } from '~entities/test/model/test.store.ts';
import { useMatchMedia } from '~shared/lib/hooks';
import * as styles from './main-introduction.css.ts';

export const MainIntroduction: FC = () => {
  const { isMobile } = useMatchMedia();
  const totalQntQuestion = useTestStore.use.currentTest();

  return (
    <Flex className={isMobile ? styles.container.mobile : styles.container.desktop}>
      <Text className={isMobile ? styles.text.mobile : styles.text.desktop} span>
        Тест состоит из {totalQntQuestion.tests.length} вопросов <br />
        Общее время данное на прохождение: 80 минут <br />
        Тест запустится сразу после нажатия на кнопку “Начать”
      </Text>
    </Flex>
  );
};
