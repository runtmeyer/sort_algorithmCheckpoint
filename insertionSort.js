function insertionSort(array) {
  const length = array.length;
  
  for (let i = 1; i < length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

const arr = [15, 82, 94, 77, 89, 2, 9, 6, 8, 34];
const sortedArr = insertionSort(arr);
console.log(sortedArr); 

