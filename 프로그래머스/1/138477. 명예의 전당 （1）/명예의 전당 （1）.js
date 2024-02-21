function solution(k, score) {
    let answer = [];
    
    for(let i = 1; i <= score.length; i++){
        let array = new Array(...score);
        let arr = array.splice(0, i);
        if(arr.length <= k){
            answer.push(Math.min(...arr));
        } else {
            let count = k;
            arr.sort((a,b) => a-b);
            while(count > 1){
                arr.pop();
                count--;
            }
            answer.push(arr[arr.length-1]);
        }
    }
    
    return answer
}