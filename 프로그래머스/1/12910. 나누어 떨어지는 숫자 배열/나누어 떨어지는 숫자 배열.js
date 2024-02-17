function solution(arr, divisor) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        arr[i] % divisor === 0 ? answer.push(arr[i]) : null;
    }
    if(answer.length > 0) return answer.sort((a,b) => a-b);
    return [-1];
}