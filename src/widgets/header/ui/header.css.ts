import { style } from '@vanilla-extract/css';
import { onestFont } from '~themes/fonts.css.ts';

export const container = style({
  height: '42px',
  justifyContent: 'center',
  backgroundColor: '#000000',
  alignItems: 'center',
});

export const text = style([
  onestFont.h3,
  {
    color: ' #656565',
    textAlign: 'center',
  },
]);
