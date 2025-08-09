export const checkedRadioStyles = (
  isRightAnswer: boolean,
  radioId: number,
  selectedId: string,
  correctAnswer?: number | string,
  savedId?: number | string,
) => {
  if (!savedId) return;

  if (isRightAnswer && radioId === Number(selectedId)) {
    return { radio: { backgroundColor: '#11CE00', borderColor: '#11CE00' }, label: { color: '#FFFFFF' } };
  } else {
    if (radioId === Number(selectedId)) {
      return { label: { color: '#FF2D2D' } };
    }

    if (radioId === Number(correctAnswer)) {
      return { radio: { backgroundColor: '#11CE00', borderColor: '#11CE00' }, label: { color: '#FFFFFF' } };
    }
  }
};
