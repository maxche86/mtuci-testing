import { style, styleVariants } from '@vanilla-extract/css';
import { onestFontContent, onestFontTitle } from '~themes/fonts.css.ts';

const containerDefault = style({
  width: '100%',
  borderRadius: '32px',
  border: '1px solid rgba(243, 243, 243, 0.2)',
  padding: '24px',
  gap: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(10px)',
  flexDirection: 'column',
  alignItems: 'center',
});

export const container = styleVariants({
  desktop: [containerDefault],
  mobile: [containerDefault, { borderRadius: '16px' }],
});

export const text = styleVariants({
  desktop: [onestFontContent.c3, { color: 'rgba(255, 255, 255, 0.7)' }],
  mobile: [onestFontContent.c4, { color: 'rgba(255, 255, 255, 0.7)' }],
});

const buttonDefault = style([
  {
    width: '188px',
    borderRadius: '8px',
    height: '42px',
    backgroundColor: '#000000',
    ':hover': {
      backgroundColor: '#000000',
    },
  },
]);

export const button = styleVariants({
  desktop: [buttonDefault, onestFontContent.c3],
  mobile: [buttonDefault, onestFontTitle.h3, { width: '197px' }],
});
