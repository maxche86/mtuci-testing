import { FC } from 'react';
import { Flex, Text } from '@mantine/core';
import { useMatchMedia } from '~shared/lib/hooks';
import * as styles from './header.css.ts';

export const Header: FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <Flex className={styles.container}>
      <Text className={isMobile ? styles.text.mobile : styles.text.desktop} span>
        Тренажер для подготовки к сдаче по специальности: “Экономика. Цифровая трансформация бизнеса”
      </Text>
    </Flex>
  );
};
