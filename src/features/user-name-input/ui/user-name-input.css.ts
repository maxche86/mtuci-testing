import { style } from '@vanilla-extract/css';
import { onestFontContent } from '~themes/fonts.css.ts';

export const container = style({
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

export const text = style([onestFontContent.c3, { color: 'rgba(255, 255, 255, 0.7)' }]);

export const button = style([
  onestFontContent.c3,
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
