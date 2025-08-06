import { FC } from 'react';
import { Mantine } from './mantine';
import { QueryProvider } from './query-client-propvider';
import { Router } from './router';

export const Provider: FC = () => (
  <Mantine>
    <QueryProvider>
      <Router />
    </QueryProvider>
  </Mantine>
);
