import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: 'url(/assets/img/bg.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});
