import { FC } from 'react';
import { Button, Flex, Input, Text } from '@mantine/core';
import { useUserResultStore } from '~entities/user-result';
import { useGoTo } from '~shared/lib/hooks/go-to.ts';
import * as styles from './user-name-input.css.ts';

export const UserNameInput: FC = () => {
  const userName = useUserResultStore.use.userName();
  const setUserName = useUserResultStore.use.setUserName();
  const { goToTestPage } = useGoTo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const handleOncClick = () => {
    goToTestPage();
  };

  return (
    <Flex className={styles.container}>
      <Flex direction='column' gap='8px' justify='center' align='center' w='100%'>
        <Text className={styles.text} span>
          Введите ваше имя
        </Text>
        <Input placeholder='Имя' w='100%' value={userName} onChange={handleChange} />
      </Flex>

      <Button className={styles.button} disabled={!userName.length} onClick={handleOncClick}>
        Начать
      </Button>
    </Flex>
  );
};
