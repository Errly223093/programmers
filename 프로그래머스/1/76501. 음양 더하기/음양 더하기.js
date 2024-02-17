function solution(abs, sign) {
    let answer = 0;
    for(let i = 0; i < abs.length; i++){
        sign[i] === true ? answer += abs[i] : answer += -abs[i];
    }
    return answer
}