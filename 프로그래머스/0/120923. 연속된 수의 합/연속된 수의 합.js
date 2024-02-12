function solution(num, total) {
    let answer = [];
    let center = 0;
    let length = Math.floor(num / 2);
    
    total % num === 0 ? center = total / num :
    center = Math.floor(total / num) + 1;
    
    for(let i = center - length; i < num + center - length; i++){
        answer.push(i);
    }
    
    // [3,4,5,6,7,8,9] = 42
    // length = 3
    // center = 6
    // i = 3
    //  
    return answer
}