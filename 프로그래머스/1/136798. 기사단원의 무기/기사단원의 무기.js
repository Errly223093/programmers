function solution(number, limit, power) {
    function div(num){
        let count = 0;
        
        for(let i = 1; Math.sqrt(num) >= i; i++){
            if(i === Math.sqrt(num)){
                count++;
            } else if(num % i === 0){
                count += 2;
            }
        }
        
        return count;
    }
    
    let arr = [];
    
    for(let i = 1; i <= number; i++){
        arr.push(div(i));
    }
    
    let answer = 0;
    
    arr.map((x) => x > limit ? answer += power : answer += x);
    
    return answer
}