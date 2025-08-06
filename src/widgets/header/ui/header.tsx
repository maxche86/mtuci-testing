import { FC } from 'react';
import { Flex, Text } from '@mantine/core';
import * as styles from './header.css.ts';

export const Header: FC = () => {
  return (
    <Flex className={styles.container}>
      <Text className={styles.text} span>
        Тренажер для подготовки к сдаче по специальности: “Экономика. Цифровая трансформация бизнеса”
      </Text>
    </Flex>
  );
};
