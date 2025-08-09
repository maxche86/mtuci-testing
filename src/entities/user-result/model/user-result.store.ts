import { createStore } from '~shared/lib/store';

type UserResultStoreState = {
  userName: string;
  answers: Map<string | number, string>;
};

type UserResultStoreActions = {
  setUserName: (value: string) => void;
  setAnswer: (key: string | number, value: string) => void;
};

export const useUserResultStore = createStore<UserResultStoreState & UserResultStoreActions>(
  set => ({
    userName: '',
    answers: new Map(),
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
  }),
  'useUserResultStore',
);
