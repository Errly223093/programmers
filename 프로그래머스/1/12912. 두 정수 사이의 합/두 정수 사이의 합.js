function solution(a, b) {
    if(a===b) return a;
    if(a > b){
        let c = b;
        b = a;
        a = c;
    }
    let answer = 0;
    for(let i = a; i <= b; i++){
        answer += i;
    }
    return answer
}