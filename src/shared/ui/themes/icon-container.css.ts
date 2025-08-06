import { styleVariants } from '@vanilla-extract/css';

export const iconContainer = styleVariants({
  default: [
    {
      width: '24px',
      height: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  s: [
    {
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  xs: [
    {
      width: '16px',
      height: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  xxs: [
    {
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  m: [
    {
      width: '32px',
      height: '32px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  xl: [
    {
      width: '64px',
      height: '64px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  xxl: [
    {
      width: '80px',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
});
