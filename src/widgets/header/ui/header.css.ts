import { style, styleVariants } from '@vanilla-extract/css';
import { onestFontContent, onestFontTitle } from '~themes/fonts.css.ts';

export const container = style({
  height: '42px',
  justifyContent: 'center',
  backgroundColor: '#000000',
  alignItems: 'center',
});

const textDefault = style([
  onestFontTitle.h3,
  {
    color: ' #656565',
    textAlign: 'center',
  },
]);

export const text = styleVariants({
  desktop: [textDefault],
  mobile: [textDefault, onestFontContent.c4],
});
