import { getRandomGroupedItems } from '~entities/test/model/helpers.ts';
import { TEST_MOCK } from '~shared/constants/test-mocks.ts';
import { createStore } from '~shared/lib/store';
import { TestType } from '~shared/types/common.ts';

type TestState = {
  currentTest: TestType[];
  currentQuestionId: number;
};

type TestActions = {
  setCurrentQuestionId: (value: number) => void;
};

export const useTestStore = createStore<TestState & TestActions>(
  set => ({
    currentTest: getRandomGroupedItems(TEST_MOCK, 40, 4).slice(0, 10),
    currentQuestionId: 1,
    setCurrentQuestionId: (value: number) =>
      set(
        state => {
          state.currentQuestionId = value;
        },
        false,
        'setCurrentQuestionId',
      ),
  }),
  'useTestStore',
);
