import { createStore } from '~shared/lib/store';

type UserResultStoreState = {
  userName: string;
  answers: Map<string | number, string>;
  rightAnswer: number;
  wrongAnswer: number;
  skippedAnswer: number;
};

type UserResultStoreActions = {
  setUserName: (value: string) => void;
  setAnswer: (key: string | number, value: string) => void;
  addRightAnswer: () => void;
  addWrongAnswer: () => void;
  addSkippedAnswer: () => void;
  resetState: () => void;
};

const initialState: UserResultStoreState = {
  userName: '',
  answers: new Map(),
  rightAnswer: 0,
  wrongAnswer: 0,
  skippedAnswer: 0,
};

export const useUserResultStore = createStore<UserResultStoreState & UserResultStoreActions>(
  set => ({
    ...initialState,
    setUserName: (value: string) =>
      set(
        state => {
          state.userName = value;
        },
        false,
        'setUserName',
      ),
    setAnswer: (key: string | number, value: string) =>
      set(
        state => {
          state.answers.set(key, value);
        },
        false,
        'setAnswer',
      ),
    addRightAnswer: () =>
      set(
        state => {
          state.rightAnswer = state.rightAnswer + 1;
        },
        false,
        'addRightAnswer',
      ),
    addWrongAnswer: () =>
      set(
        state => {
          state.wrongAnswer = state.wrongAnswer + 1;
        },
        false,
        'addWrongAnswer',
      ),
    addSkippedAnswer: () =>
      set(
        state => {
          state.skippedAnswer = state.skippedAnswer + 1;
        },
        false,
        'addSkippedAnswer',
      ),
    resetState: () => set(() => initialState),
  }),
  'useUserResultStore',
);
