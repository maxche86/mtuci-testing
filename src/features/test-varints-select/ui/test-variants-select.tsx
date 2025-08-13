import { FC } from 'react';
import { Flex, Radio } from '@mantine/core';
import { useTestStore } from '~entities/test/model/test.store.ts';
import { TEST_MOCK, TEST_MOCK_V2 } from '~shared/constants/test-mocks.ts';

export const TestVariantsSelect: FC = () => {
  const currentTest = useTestStore.use.currentTest();
  const setCurrentTest = useTestStore.use.setCurrentTest();

  const handleSetTestVariant = (value: string) => {
    if (value === '1') {
      setCurrentTest({ id: '1', tests: TEST_MOCK });
    }
    if (value === '2') {
      setCurrentTest({ id: '2', tests: TEST_MOCK_V2 });
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
