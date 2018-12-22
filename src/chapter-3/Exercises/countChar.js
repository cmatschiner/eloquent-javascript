export default function countChar(word, char) {
  let numberChar = 0;
  for (let count = 0; count < word.length; count++) {
    if (word[count] === char) {
      numberChar++;
    }
  }
  return numberChar;
}
