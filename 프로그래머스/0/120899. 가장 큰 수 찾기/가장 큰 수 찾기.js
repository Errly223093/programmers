function solution(array) {
    let index = array.indexOf(Math.max(...array));
    let answer = [Math.max(...array), index];
    return answer;
}