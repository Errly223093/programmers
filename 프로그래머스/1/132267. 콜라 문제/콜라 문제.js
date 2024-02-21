function solution(a, b, n) {
    let count = 0;
    let bottle = n;
    while(bottle >=  a){
        let temp  = 0;
        temp -= (Math.floor(bottle / a) * a);
        count += Math.floor(bottle / a) * b;
        bottle += Math.floor(bottle / a) * b + temp; 
    }
    return count;
}