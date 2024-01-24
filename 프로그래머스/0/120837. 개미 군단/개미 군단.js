function solution(hp) {
    let temp;
    let answer;
    
    answer = Math.floor(hp/5);
    temp = hp%5;
    
    answer += Math.floor(temp/3) + temp%3;
    
    return answer;
}