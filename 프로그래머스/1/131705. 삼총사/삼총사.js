function solution(number) {
    let count = 0;
    
    for(let i = 0; i <= number.length - 3; i++){
        for(let j = i + 1; j <= number.length - 2; j++){
            for(let k = j + 1; k <= number.length - 1; k++){
                number[i] + number[j] + number[k] === 0 ? count++ : null;
            }
        }
    }
    
    return count;
}