function fibs(n) {
  const terms = [0, 1];

  for (let i = 2; i < n; i++) {
    terms[i] = terms[i - 1] + terms[i - 2];
  }

  return terms.slice(0, n);
}
console.log('The first 10 Fibonacci numbers are:');
console.log('fibs', fibs(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
