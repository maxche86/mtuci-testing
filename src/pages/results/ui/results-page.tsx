import { FC } from 'react';
import { Flex } from '@mantine/core';
import { Results } from '~widgets/results';
import { useMatchMedia } from '~shared/lib/hooks';

export const ResultsPage: FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <Flex direction='column' justify='center' align='center' mt={isMobile ? '160' : '206px'}>
      <Results />
    </Flex>
  );
};
