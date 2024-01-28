function solution(n) {
    // n = 10
    // 1 2 '3'
    let s = 0;
    let x = 1;
    for(let i = 1; x*i <= n; i++){
        x *= i;
        s = i;
    }
    return s;
}