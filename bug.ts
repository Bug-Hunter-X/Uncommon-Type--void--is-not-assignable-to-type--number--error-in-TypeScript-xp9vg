function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will work fine

//But this will throw error
function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i == 3) {
      return;
    }
  }
}

printNumbers2(5);