export type TestType = {
  id_question: number;
  question: string;
  variants: { id: number; title: string }[];
  answer: number;
};
