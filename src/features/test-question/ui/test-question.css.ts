import { style, styleVariants } from '@vanilla-extract/css';
import { onestFontContent, onestFontTitle } from '~themes/fonts.css.ts';

const qstContainerDefault = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(10px)',
  color: '#FFFFFF',
  padding: '24px 32px',
  borderRadius: '48px',
  border: '1px solid #6D6D6D',
});

export const qstContainer = styleVariants({
  desktop: [qstContainerDefault],
  mobile: [qstContainerDefault, { borderRadius: '24px' }],
});

const button = style([
  {
    width: '188px',
    borderRadius: '8px',
    height: '42px',
  },
]);

export const buttonSkip = styleVariants({
  desktop: [
    button,
    onestFontContent.c3,
    {
      backgroundColor: '#222222',
      ':hover': {
        backgroundColor: '#222222',
      },
    },
  ],
  mobile: [
    button,
    onestFontTitle.h3,
    {
      width: '98px',
      padding: '7px 7px',
      backgroundColor: '#222222',
      ':hover': {
        backgroundColor: '#222222',
      },
    },
  ],
});

export const buttonNext = styleVariants({
  desktop: [
    button,
    onestFontContent.c3,
    {
      backgroundColor: '#000000',
      ':hover': {
        backgroundColor: '#000000',
      },
    },
  ],
  mobile: [
    button,
    onestFontTitle.h3,
    {
      width: '98px',
      padding: '7px 7px',
      backgroundColor: '#000000',
      ':hover': {
        backgroundColor: '#000000',
      },
    },
  ],
});

export const buttonContainer = style({
  position: 'absolute',
  bottom: '200px',
  gap: '32px',
});
