function solution(array) {
    array.splice(array.indexOf(Math.min(...array)), 1);
    return array.length === 1 ? [-1] : array;
}