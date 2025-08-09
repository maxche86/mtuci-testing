/**
 * Функция, которая из большого массива создает новый массив,
 * выбирая случайные элементы из каждой группы объектов
 *
 * @param array Исходный массив объектов
 * @param groupSize Размер группы (по умолчанию 40)
 * @param pickCount Количество элементов, которое нужно выбрать из каждой группы (по умолчанию 4)
 * @returns Новый массив со случайно выбранными элементами из каждой группы
 */
import { TestType } from '~shared/types/common.ts';

export function getRandomGroupedItems(array: TestType[], groupSize: number = 40, pickCount: number = 4): TestType[] {
  // Проверка на пустой массив
  if (!array || array.length === 0) {
    return [];
  }

  const result: TestType[] = [];

  // Определяем количество полных групп
  const groupCount = Math.floor(array.length / groupSize);

  // Обрабатываем каждую группу
  for (let groupIndex = 0; groupIndex < groupCount; groupIndex++) {
    // Получаем текущую группу
    const startIndex = groupIndex * groupSize;
    const currentGroup = array.slice(startIndex, startIndex + groupSize);

    // Выбираем случайные элементы из группы
    const selectedItems = getRandomItemsFromGroup(currentGroup, pickCount);

    // Добавляем выбранные элементы в результат
    result.push(...selectedItems);
  }

  // Обрабатываем оставшиеся элементы, если они есть и их количество не меньше pickCount
  const remainingElements = array.length % groupSize;
  if (remainingElements >= pickCount) {
    const startIndex = groupCount * groupSize;
    const lastGroup = array.slice(startIndex);
    const selectedItems = getRandomItemsFromGroup(lastGroup, pickCount);
    result.push(...selectedItems);
  }

  return result;
}

/**
 * Вспомогательная функция для выбора случайных элементов из группы
 */
function getRandomItemsFromGroup<T>(group: T[], count: number): T[] {
  // Если элементов меньше чем требуется, вернем все элементы
  if (group.length <= count) {
    return [...group];
  }

  // Создаем копию группы, чтобы не изменять оригинал
  const groupCopy = [...group];
  const result: T[] = [];

  // Выбираем случайные элементы
  for (let i = 0; i < count; i++) {
    // Генерируем случайный индекс в пределах оставшихся элементов
    const randomIndex = Math.floor(Math.random() * groupCopy.length);
    // Добавляем выбранный элемент в результат
    result.push(groupCopy[randomIndex]);
    // Удаляем выбранный элемент из копии, чтобы избежать повторений
    groupCopy.splice(randomIndex, 1);
  }

  return result;
}
