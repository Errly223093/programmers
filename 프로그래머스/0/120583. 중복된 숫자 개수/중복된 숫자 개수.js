function solution(arr, n) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] === n ? count++ : null;
    }
    return count
}