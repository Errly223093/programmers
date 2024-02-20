function solution(food) {
    let answer = [];
    
    for(let i = 1; i < food.length; i++){
        if(food[i] === 1) {
            continue;
        } else if(food[i] % 2 === 0){
            while(food[i] / 2 > 0){
                answer.push(i);
                food[i] -= 2;
            }
        } else {
            while((food[i] - 1) / 2 > 0){
                answer.push(i);
                food[i] -= 2;
            }
        }
    }
    
    answer = answer.join('') + "0" +answer.reverse().join('');
    return answer
}