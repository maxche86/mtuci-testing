import { getRandomGroupedItems } from '~entities/test/model/helpers.ts';
import { TEST_MOCK } from '~shared/constants/test-mocks.ts';
import { createStore } from '~shared/lib/store';
import { TestType as Test } from '~shared/types/common.ts';

interface TestType {
  id: string;
  tests: Test[];
}

type TestState = {
  currentTest: TestType;
  currentQuestionId: number;
};

type TestActions = {
  setCurrentQuestionId: (value: number) => void;
  setCurrentTest: (value: TestType) => void;
  resetTest: () => void;
};

const initialState: TestState = {
  currentTest: { id: '1', tests: getRandomGroupedItems(TEST_MOCK, 40, 2) },
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
    setCurrentTest: (value: TestType) =>
      set(
        state => {
          state.currentTest = { id: value.id, tests: getRandomGroupedItems(value.tests, 40, 2) };
        },
        false,
        'setCurrentQuestionId',
      ),
    resetTest: () =>
      set(
        state => {
          state.currentTest = { id: '1', tests: getRandomGroupedItems(TEST_MOCK, 40, 2) };
        },
        false,
        'resetTest',
      ),
  }),
  'useTestStore',
);
