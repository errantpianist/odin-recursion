function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);

  function merge(left, right) {
    const merged = [];

    while (left.length || right.length) {
      if (left.length && right.length) {
        if (left[0] < right[0]) {
          merged.push(left.shift());
        } else {
          merged.push(right.shift());
        }
      } else if (left.length) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }
    return merged;
  }
}

console.log('mergeSort', mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9
console.log('mergesort', mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
