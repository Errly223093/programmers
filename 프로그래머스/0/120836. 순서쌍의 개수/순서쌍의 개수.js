function solution(n) {
    if(n === 1) return 1;
    if(n <= 3) return 2;
    
    let x = 0;
    for(let i = 1; i < n; i++){
        Math.floor(n/i) - (n/i) >= 0 ? x++ : null;
    }
    return x+1
}