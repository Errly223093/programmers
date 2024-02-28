function solution(nums) {
    function div(num){
        let count = 0;
        
        for(let i = 1; i <= Math.sqrt(num); i++){
            if(Math.sqrt(num) === i){
                count++;
            } else if(num % i === 0){
                count += 2;
            }
        }
        
        return count
    }
    
    let answer = 0;
    
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i+1; j < nums.length - 1; j++){
            for(let k = j+1; k < nums.length; k++){
            div(nums[i] + nums[j] + nums[k]) === 2 ? answer++ : null;
            }
        }
    }
            
    return answer
}