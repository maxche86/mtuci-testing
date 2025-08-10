import { style, styleVariants } from '@vanilla-extract/css';
import { onestFontContent } from '~themes/fonts.css.ts';

const containerDefault = style({
  backgroundColor: 'rgba(20, 20, 20, 0.26)',
  borderRadius: '32px',
  padding: '24px',
  textAlign: 'center',
  width: '100%',
});

export const container = styleVariants({
  desktop: [containerDefault],
  mobile: [containerDefault, { borderRadius: '16px' }],
});

export const text = styleVariants({
  desktop: [onestFontContent.c3, { color: '#FFFFFF' }],
  mobile: [onestFontContent.c4, { color: '#FFFFFF' }],
});
