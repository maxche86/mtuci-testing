import { style } from '@vanilla-extract/css';
import { onestFontContent } from '~themes/fonts.css.ts';

export const container = style({
  width: '430px',
  height: '144px',
  backgroundColor: 'rgba(20, 20, 20, 0.26)',
  borderRadius: '32px',
  padding: '24px',
  textAlign: 'center',
});

export const text = style([onestFontContent.c3, { color: '#FFFFFF' }]);
