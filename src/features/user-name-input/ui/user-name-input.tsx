import { ChangeEvent, FC } from 'react';
import { Button, Flex, Input, Text } from '@mantine/core';
import { useTestStore } from '~entities/test/model/test.store.ts';
import { useUserResultStore } from '~entities/user-result';
import { useGoTo } from '~shared/lib/hooks/go-to.ts';
import * as styles from './user-name-input.css.ts';

export const UserNameInput: FC = () => {
  const userName = useUserResultStore.use.userName();
  const setUserName = useUserResultStore.use.setUserName();
  const { goToQuestionPageId } = useGoTo();
  const currentQuestionId = useTestStore.use.currentQuestionId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const handleOncClick = () => {
    goToQuestionPageId(currentQuestionId);
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
