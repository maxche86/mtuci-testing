import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Flex, Radio, SimpleGrid, Text } from '@mantine/core';
import { useTestStore } from '~entities/test/model/test.store.ts';
import { useUserResultStore } from '~entities/user-result';
import { useGoTo } from '~shared/lib/hooks/go-to.ts';
import { onestFontContent } from '~themes/fonts.css.ts';
import { checkedRadioStyles } from '../model/helpers.ts';
import * as styles from './test-question.css.ts';

export const TestQuestion: FC = () => {
  const { id } = useParams();
  const currentQuestionPageId = Number(id);
  const { goToQuestionPageId, goToResultsPage } = useGoTo();
  const [value, setValue] = useState('');
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const testsQuestion = useTestStore.use.currentTest();
  const setAnswer = useUserResultStore.use.setAnswer();
  const answer = useUserResultStore.use.answers();
  const addRightAnswer = useUserResultStore.use.addRightAnswer();
  const addWrongAnswer = useUserResultStore.use.addWrongAnswer();
  const addSkippedAnswer = useUserResultStore.use.addSkippedAnswer();

  const currentQuestion = id && testsQuestion.at(currentQuestionPageId - 1);
  const savedCurrentAnswer = answer.get(currentQuestionPageId);
  const correctAnswer = currentQuestion && currentQuestion?.answer;

  const rightButtonText = !answer.get(currentQuestionPageId) ? 'Проверка' : 'Дальше';

  const isLastQuestion = currentQuestionPageId === testsQuestion.length;

  const handleSetVariant = (variantId: string) => {
    setValue(variantId);
  };

  //Сетаем выбраный вариант. Проверяем ответ - кнопка "Проверка"
  const handleCheckVariant = (variantId: string) => {
    setAnswer(currentQuestionPageId, variantId);
    if (correctAnswer && Number(variantId) === correctAnswer) {
      setIsRightAnswer(true);
      addRightAnswer();
    } else {
      setIsRightAnswer(false);
      addWrongAnswer();
    }
  };

  //Сброс локального состояния Radio. Условия для переходя на след. страницу по кнопке "Дальше".
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setValue('');
      goToResultsPage();
    } else {
      setValue('');
      goToQuestionPageId(currentQuestionPageId + 1);
    }
  };

  //Условие для выбора действия кнопки "Проверка/Дальше".
  const handleRightButton = () => {
    if (savedCurrentAnswer) {
      handleNextQuestion();
    } else {
      handleCheckVariant(value);
    }
  };

  //Условия для перехода на след страницу по кнопке "Пропустить"
  const handleSkipButton = () => {
    addSkippedAnswer();
    setValue('');
    if (isLastQuestion) {
      goToResultsPage();
    } else {
      goToQuestionPageId(currentQuestionPageId + 1);
      setAnswer(currentQuestionPageId, '');
    }
  };

  return (
    currentQuestion && (
      <Flex direction='column' gap='64px' w='1142px' align='center'>
        <Flex direction='column' align='center' gap='8px' w='100%'>
          <Text className={onestFontContent.c1} c='#FFFFFF' span>
            {id} из {testsQuestion.length}
          </Text>
          <Flex className={styles.qstContainer}>
            <Text className={onestFontContent.c2} span ta='center'>
              {currentQuestion.question}
            </Text>
            <Radio.Group value={value} onChange={handleSetVariant}>
              <SimpleGrid spacing='12px'>
                {currentQuestion.variants.map(el => (
                  <Radio
                    label={el.title}
                    value={el.id.toString()}
                    disabled={!!savedCurrentAnswer}
                    key={el.id}
                    styles={checkedRadioStyles(isRightAnswer, el.id, value, correctAnswer, savedCurrentAnswer)}
                  />
                ))}
              </SimpleGrid>
            </Radio.Group>
          </Flex>
        </Flex>
        <Flex gap='32px'>
          <Button className={styles.buttonVariants.skip} onClick={handleSkipButton} disabled={!!savedCurrentAnswer}>
            Пропустить
          </Button>
          <Button className={styles.buttonVariants.next} onClick={handleRightButton} disabled={!value}>
            {rightButtonText}
          </Button>
        </Flex>
      </Flex>
    )
  );
};
