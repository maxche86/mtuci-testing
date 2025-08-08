import { FC, useState } from 'react';
import { Button, Flex, Radio, SimpleGrid, Text } from '@mantine/core';
import { onestFontContent } from '~themes/fonts.css.ts';
import * as styles from './test-question.css.ts';

export const TestQuestion: FC = () => {
  const [value, setValue] = useState('');

  return (
    <Flex direction='column' gap='64px' w='1142px' align='center'>
      <Flex direction='column' align='center' gap='8px'>
        <Text className={onestFontContent.c1} c='#FFFFFF' span>
          40 из 40
        </Text>
        <Flex className={styles.qstContainer}>
          <Text className={onestFontContent.c2} span ta='center'>
            При эластичном спросе снижение цены приводит к:
          </Text>
          <Radio.Group value={value} onChange={setValue}>
            <SimpleGrid spacing='12px'>
              <Radio label='снижению выручки' value='1' />
              <Radio label='неизменности выручки' value='2' />
              <Radio label='росту выручки' value='3' />
              <Radio label='нулевой выручке' value='4' />
            </SimpleGrid>
          </Radio.Group>
        </Flex>
      </Flex>
      <Flex gap='32px'>
        <Button className={styles.buttonVariants.skip}>Пропустить</Button>
        <Button className={styles.buttonVariants.next}>Дальше</Button>
      </Flex>
    </Flex>
  );
};
