export default function duplicatedArray (array) {
  const duplicatedArray = [];

  for (let i = 0; i < array.length; i++) {
    duplicatedArray.push(array[i]);
  }

  return duplicatedArray;
}
