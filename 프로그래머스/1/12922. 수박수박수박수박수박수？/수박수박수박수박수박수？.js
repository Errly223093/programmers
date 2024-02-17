function solution(n) {
    let answer ="";
    let count = Math.floor(n / 2);
    for(let i = 0; i < count; i++){
        answer += "수박";
    }
    return n % 2 === 0 ? answer : answer + "수";
}