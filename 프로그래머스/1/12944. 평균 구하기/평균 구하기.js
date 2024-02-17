function solution(arr) {
    let answer = 0;
    let length = arr.length;
    for(let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    return answer / length;
}