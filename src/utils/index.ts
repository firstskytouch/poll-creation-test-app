export const capitalize = (character: string) => {
  const charToArray = character.split('');
  let convertedChar = '';
  charToArray.map((char: string) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      convertedChar = convertedChar + String.fromCharCode(charCode - 32);
    } else {
      convertedChar = convertedChar + char;
    }
  });
  return convertedChar;
};
