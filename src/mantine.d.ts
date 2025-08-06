import { TextVariant } from '@mantine/core';

export type LabelVariant =
  | 'label-l1'
  | 'label-l2'
  | 'label-l3'
  | 'label-l4'
  | 'label-l1-m'
  | 'label-l2-m'
  | 'label-l3-m'
  | 'label-l4-m';

export type ShortTextVariant = 'short-text-t1' | 'short-text-t2' | 'short-text-t3' | 'short-text-t4' | 'short-text-t5';

export type ParagraphVariant =
  | 'paragraph-p1'
  | 'paragraph-p2'
  | 'paragraph-p3'
  | 'paragraph-p4'
  | 'paragraph-p5'
  | 'paragraph-p6';

type TExtendedTextVariant = TextVariant | LabelVariant | ShortTextVariant | ParagraphVariant;

declare module '@mantine/core' {
  export interface TextProps {
    variant?: TExtendedTextVariant;
  }

  export interface TitleProps {
    variant?: 'h7';
  }
}
