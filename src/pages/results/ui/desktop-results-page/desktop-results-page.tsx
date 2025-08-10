import { FC } from 'react';
import { Flex } from '@mantine/core';
import { Results } from '~widgets/results';

export const DesktopResultsPage: FC = () => {
  return (
    <Flex direction='column' justify='center' align='center' mt='206px'>
      <Results />
    </Flex>
  );
};
