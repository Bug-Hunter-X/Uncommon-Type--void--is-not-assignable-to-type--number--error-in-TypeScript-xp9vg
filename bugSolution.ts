function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      return; // This is fine. Function is declared to return void
    }
  }
}

printNumbers(5); 