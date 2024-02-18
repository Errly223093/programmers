function solution(n) {
    let three = [];
    let b = n;
    let a = 0;
    
    while(b > 0){
        a = n % 3;
        b = Math.floor(n / 3);
        n = b;
        three.unshift(a);
    }
    
    three.reverse();
    let answer = 0;
    let count = 1;
    for(let i = three.length-1; i >= 0; i--){
        answer += (three[i] * count);
        count *= 3;
    }
    return answer
    
    // 22111 => 
    // 97531 => 162 + 54 + 9 + 3 + 1
    // 81 27 9 3 1
}