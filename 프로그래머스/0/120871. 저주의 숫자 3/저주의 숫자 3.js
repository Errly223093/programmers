function solution(n) {
    // 13 => 3의 배수이거나 3을 포함한다면? pass
    // 15
    // 1,2,4,5,7,8,10,11,14,16,17,19,20,22,25
    // while 문 사용해서 n-- 시키고 n == 0 되면 stop.
    
    let answer = [];
    
    for(let i = 0; answer.length < n; i++){
        if(i % 3 !== 0 && i.toString().split('').indexOf("3") < 0){
            answer.push(i);
        }
    }
    
    return answer[answer.length-1];
}