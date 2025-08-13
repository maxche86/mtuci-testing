import { style, styleVariants } from '@vanilla-extract/css';

export const pageContainer = style({
  flexDirection: 'column',
  alignItems: 'center',
});

const glassContainerDefault = style({
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

export const glassContainer = styleVariants({
  desktop: [glassContainerDefault],
  mobile: [glassContainerDefault, { borderRadius: '16px' }],
});
