function solution(bin1, bin2) {
    let b1 = bin1.split('');
    let b2 = bin2.split('');
    
    let temp = 1;
    let b1a = 0;
    let b2a = 0;
    
    for(let i = b1.length-1; i >= 0; i--){
        b1a += b1[i] * temp;
        temp *= 2;
    }
    
    temp = 1;
    
    for(let i = b2.length-1; i >= 0; i--){
        b2a += b2[i] * temp;
        temp *= 2;
    }
    
    let decimal = b1a + b2a;
    let answer = [];
    
    while(decimal > 1){
        answer.push(decimal % 2);
        decimal = Math.floor(decimal/2);
        if(decimal === 1){
            answer.push(decimal);
        }
    }
    
    if(answer.length === 0) return "0";
    
    return answer.reverse().join('');
}