function solution(str) {
    str = str.split('');
    let answer = 0;
    for(let i = 0; i < str.length; i++){
        +str[i] > 0 ? answer += +str[i] : null;
    }
    return answer
}