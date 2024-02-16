function solution(n) {
    let num = n.toString().split('');
    let answer = 0;
    for(let i = 0; i < num.length; i++){
        answer += +num[i];
    }
    return answer
}