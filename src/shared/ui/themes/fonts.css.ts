import { globalFontFace, style, styleVariants } from '@vanilla-extract/css';

export const OnestLite = 'OnestLite';
export const OnestRegular = 'OnestRegular';
export const OnestBold = 'OnestBold';

globalFontFace(OnestLite, {
  fontWeight: 300,
  src: 'url("/assets/fonts/ONEST.TTF") format("truetype")',
});

globalFontFace(OnestRegular, {
  fontWeight: 400,
  src: 'url("/assets/fonts/ONEST.TTF") format("truetype")',
});

globalFontFace(OnestBold, {
  fontWeight: 500,
  src: 'url("/assets/fonts/ONEST.TTF") format("truetype")',
});

const OnestFontLite = style({
  fontFamily: OnestLite,
  fontWeight: '300',
});

const OnestFontRegular = style({
  fontFamily: OnestRegular,
  fontWeight: '400',
});

const OnestFontBold = style({
  fontFamily: OnestBold,
  fontWeight: '500',
});

export const onestFontTitleBold = styleVariants({
  t2: [
    OnestFontBold,
    {
      fontSize: '16px',
      lineHeight: '130%',
    },
  ],
});

export const onestFontTitle = styleVariants({
  h3: [
    OnestFontLite,
    {
      fontSize: '14px',
      lineHeight: '120%',
    },
  ],
});

export const onestFontContent = styleVariants({
  c1: [
    OnestFontRegular,
    {
      fontSize: '32px',
      lineHeight: '120%',
    },
  ],
  c2: [
    OnestFontRegular,
    {
      fontSize: '28px',
      lineHeight: '42px',
    },
  ],
  c3: [
    OnestFontRegular,
    {
      fontSize: '16px',
      lineHeight: '24px',
    },
  ],
  c4: [
    OnestFontRegular,
    {
      fontSize: '12px',
      lineHeight: '130%',
    },
  ],
});
