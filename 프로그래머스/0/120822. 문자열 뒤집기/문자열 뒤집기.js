function solution(str) {
    let answer = [];
    for(let i = str.length-1; i >= 0; i--){
        answer.push(str[i]);
    }
    return answer.join('');
}