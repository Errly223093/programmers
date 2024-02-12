function solution(q) {
    let answer = [];
    
     
    for(let i = 0; i < q.length; i++){
        let split = q[i].split(' ');
        let temp = 0;
        
        split[1] === "-" ? temp = (+split[0] - +split[2]) : (temp = +split[2] + +split[0]);
        
        temp === +split[4] ? answer.push("O") : answer.push("X")
    }
    
    return answer;
}