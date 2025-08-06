import { style } from '@vanilla-extract/css';
import { color } from './color.css';

export const scrollBarNone = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent',
    },
  },
});

export const scrollBar = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      transition: 'all 0.3s',
      background: color.volna.$400,
      borderRadius: '8px',
    },
  },
});
