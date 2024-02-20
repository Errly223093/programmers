function solution(numbers) {
    let answer = [];
    
    //[2,1,3,4,1]
    //[2,1,3,4,1]
    
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer.sort((a,b) => a - b);
    let answers = [...new Set(answer)];
    
    return answers;
        
}