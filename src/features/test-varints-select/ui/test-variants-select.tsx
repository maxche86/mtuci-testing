import { FC } from 'react';
import { Flex, Radio } from '@mantine/core';
import { getRandomGroupedItems } from '~entities/test/model/helpers.ts';
import { useTestStore } from '~entities/test/model/test.store.ts';
import { TEST_MOCK, TEST_MOCK_V2 } from '~shared/constants/test-mocks.ts';

export const TestVariantsSelect: FC = () => {
  const currentTest = useTestStore.use.currentTest();
  const setCurrentTest = useTestStore.use.setCurrentTest();

  const handleSetTestVariant = (value: string) => {
    if (value === '1') {
      setCurrentTest({ id: '1', tests: getRandomGroupedItems(TEST_MOCK, 40, 2) });
    }
    if (value === '2') {
      setCurrentTest({ id: '2', tests: getRandomGroupedItems(TEST_MOCK_V2, 40, 2) });
    }
  };

  return (
    <Radio.Group value={currentTest.id} onChange={handleSetTestVariant}>
      <Flex gap='24px' c='#FFFFFF'>
        <Radio label='Набор вопросов 1' value='1' />
        <Radio label='Набор вопросов 2' value='2' />
      </Flex>
    </Radio.Group>
  );
};
