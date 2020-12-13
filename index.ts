// Import stylesheets
import "./style.css";

// Write TypeScript code!
function sortArray(ar: number[], n = ar.length) {
  if (n == 1) {
    return arr;
  }

  for (let j = 1; j < n - 1; j = j + 2) {
    if (arr[j] > arr[j + 2]) {
      [arr[j], arr[j + 2]] = [arr[j + 2], arr[j]];
    }
  }

  return sortArray(arr, n - 1);
}

function printArray(ar: number[]) {
  for (let i = 0; i < ar.length; i++) {
    document.getElementById("app").innerHTML += ar[i];
  }
}

let arr: number[] = [7, 6, 5, 4, 3, 2, 1];
sortArray(arr, arr.length);
printArray(arr);
