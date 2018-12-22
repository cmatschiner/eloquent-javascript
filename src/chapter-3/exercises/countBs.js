export default function countBs(word) {
  let numberBs = 0;
  for (let count = 0; count < word.length; count++) {
    if (word[count] === "b" || word[count] === "B") {
      numberBs++;
    }
  }
  return numberBs;
}
