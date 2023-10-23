export function orderStringWithoutTag(originalString) {
  // Регулярное выражение для удаления указанной части и внутреннего контента
  const regex = /: № <span class="text-bold">(.*?)<\/span>/;
  return originalString.replace(regex, '');
}
