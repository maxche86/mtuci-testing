import { FC } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { color } from '~themes/color.css.ts';
import { zIndex as Z_INDEX } from '~themes/zIndex.css';

interface BlockingLoaderProps {
  zIndex?: string;
}

export const BlockingLoader: FC<BlockingLoaderProps> = ({ zIndex = Z_INDEX.blockingLoader }) => (
  <LoadingOverlay
    zIndex={zIndex}
    overlayProps={{ radius: 'lg', blur: 4, fixed: true }}
    loaderProps={{ color: color.blue.$500, size: 60 }}
    visible
  />
);
