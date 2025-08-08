import { FC } from 'react';
import { Flex, Text } from '@mantine/core';
import * as styles from './main-introduction.css.ts';

export const MainIntroduction: FC = () => {
  return (
    <Flex className={styles.container}>
      <Text className={styles.text} span>
        Тест состоит из 40 вопросов <br />
        Общее время данное на прохождение: 80 минут <br />
        Тест запустится сразу после нажатия на кнопку <br />
        “Начать”
      </Text>
    </Flex>
  );
};
