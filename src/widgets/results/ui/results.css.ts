import { style, styleVariants } from '@vanilla-extract/css';
import { onestFontContent, onestFontTitle } from '~themes/fonts.css.ts';

export const resultsContainer = styleVariants({
  desktop: [
    {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(10px)',
      color: '#FFFFFF',
      padding: '24px 32px',
      borderRadius: '32px',
      border: '1px solid #6D6D6D',
    },
  ],
  mobile: [
    {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(10px)',
      color: '#FFFFFF',
      padding: '24px',
      borderRadius: '24px',
      border: '1px solid #6D6D6D',
    },
  ],
});

const textContainerDefault = style({
  justifyContent: 'space-between',
  color: '#FFFFFF',
});

export const textContainer = styleVariants({
  desktop: [textContainerDefault, onestFontTitle.h2],
  mobile: [textContainerDefault, onestFontContent.c4],
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
  mobile: [buttonDefault, onestFontTitle.h3],
});
