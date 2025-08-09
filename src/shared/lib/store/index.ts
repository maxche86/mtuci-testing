/* eslint-disable @typescript-eslint/no-explicit-any */
import { enableMapSet } from 'immer';
import { create, StateCreator, UseBoundStore, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

enableMapSet();

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store(s => s[k as keyof typeof s]);
  }

  return store;
};

export const createStore = <T extends object>(
  fn: StateCreator<T, [['zustand/immer', never], ['zustand/devtools', never]]>,
  name: string,
) => {
  const store = create<T>()(immer(devtools(fn, { name, enabled: import.meta.env.DEV })));

  return createSelectors(store);
};
