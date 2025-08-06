import { style } from '@vanilla-extract/css';

export const app = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '0',
  height: '100vh',

  '@supports': {
    '(height: 100dvh)': { height: '100dvh' },
  },
});
