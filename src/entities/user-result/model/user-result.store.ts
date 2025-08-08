import { createStore } from '~shared/lib/store';

type UserResultStoreState = {
  userName: string;
};

type UserResultStoreActions = {
  setUserName: (value: string) => void;
};

export const useUserResultStore = createStore<UserResultStoreState & UserResultStoreActions>(
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
  'useUserResultStore',
);
