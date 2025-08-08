import { style, styleVariants } from '@vanilla-extract/css';
import { onestFontContent } from '~themes/fonts.css.ts';

export const qstContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(10px)',
  color: '#FFFFFF',
  padding: '24px 32px',
  borderRadius: '48px',
});

const button = style([
  onestFontContent.c3,
  {
    width: '188px',
    borderRadius: '8px',
    height: '42px',
  },
]);

export const buttonVariants = styleVariants({
  skip: [
    button,
    {
      backgroundColor: '#222222',
      ':hover': {
        backgroundColor: '#222222',
      },
    },
  ],
  next: [
    button,
    {
      backgroundColor: '#000000',
      ':hover': {
        backgroundColor: '#000000',
      },
    },
  ],
});
