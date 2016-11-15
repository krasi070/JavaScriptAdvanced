function* reverseGenerator(arr) {
    let index = arr.length - 1;
    while (index >= 0) {
        yield arr[index--];
    }
}