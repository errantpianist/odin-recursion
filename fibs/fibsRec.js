function fibsRec(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const prevFibs = fibsRec(n - 1);

  return [...prevFibs, prevFibs[n - 1] + prevFibs[n - 2]];
}
console.log('The first 10 Fibonacci numbers are:');
console.log('fibsRec', fibsRec(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
