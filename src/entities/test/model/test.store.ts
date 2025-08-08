import { createStore } from '~shared/lib/store';

type TestStoreState = {
  userName: string;
};

type TestStoreActions = {
  setUserName: (value: string) => void;
};

export const useTestStore = createStore<TestStoreState & TestStoreActions>(
  set => ({
    userName: '',
    setUserName: (value: string) =>
      set(
        state => {
          state.userName = value;
        },
        false,
        'setUserName',
      ),
  }),
  'PdnStore',
);
