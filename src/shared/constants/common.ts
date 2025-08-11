export const PATH = {
  main: '/mtuci-testing',
  test: {
    root: '/mtuci-testing/test',
    id: '/mtuci-testing/test/:id',
    questionId: (id: string | number) => `/mtuci-testing/test/${id}`,
  },
  results: '/mtuci-testing/results',
};

export const TEST_TIMER_MS_IN_SEC = 80 * 60 * 60;
