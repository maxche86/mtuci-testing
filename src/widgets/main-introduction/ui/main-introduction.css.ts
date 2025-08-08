import { style } from '@vanilla-extract/css';
import { onestFontContent } from '~themes/fonts.css.ts';

export const container = style({
  backgroundColor: 'rgba(20, 20, 20, 0.26)',
  borderRadius: '32px',
  padding: '24px',
  textAlign: 'center',
  width: '100%',
});

export const text = style([onestFontContent.c3, { color: '#FFFFFF' }]);
