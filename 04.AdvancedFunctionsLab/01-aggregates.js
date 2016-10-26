function aggregates(arr) {
    console.log(`Sum = ${arr.reduce((a, b) => a + b)}`);
    console.log(`Min = ${arr.reduce((a, b) => a < b ? a : b)}`);
    console.log(`Max = ${arr.reduce((a, b) => a > b ? a : b)}`);
    console.log(`Product = ${arr.reduce((a, b) => a * b)}`);
    console.log(`Join = ${arr.reduce((a, b) => '' + a + b)}`);
}