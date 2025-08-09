import { FC, ReactNode } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import '@mantine/dates/styles.css';

const theme = createTheme({
  focusRing: 'never',
  components: {},
});

interface MantineProps {
  children: ReactNode;
}

export const Mantine: FC<MantineProps> = ({ children }) => (
  <MantineProvider theme={theme}>
    <DatesProvider settings={{ locale: 'ru' }}>{children}</DatesProvider>
  </MantineProvider>
);
