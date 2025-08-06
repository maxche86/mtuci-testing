import { style } from '@vanilla-extract/css';

export const app = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '0',
  height: '100vh',
  backgroundImage: 'url(/assets/img/bg.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  '@supports': {
    '(height: 100dvh)': { height: '100dvh' },
  },
});
