export const PATH = {
  main: '/',
  test: { root: 'test', id: '/test/:id', questionId: (id: string | number) => `/test/${id}` },
  results: '/results',
};

export const TEST_TIMER_MS_IN_SEC = 80 * 60 * 60;
