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
  resetTest: () => void;
};

const initialState: TestState = {
  currentTest: getRandomGroupedItems(TEST_MOCK, 40, 4),
  currentQuestionId: 1,
};

export const useTestStore = createStore<TestState & TestActions>(
  set => ({
    ...initialState,
    setCurrentQuestionId: (value: number) =>
      set(
        state => {
          state.currentQuestionId = value;
        },
        false,
        'setCurrentQuestionId',
      ),
    resetTest: () =>
      set(
        state => {
          state.currentTest = getRandomGroupedItems(TEST_MOCK, 40, 4);
        },
        false,
        'resetTest',
      ),
  }),
  'useTestStore',
);
