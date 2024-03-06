function solution(keymap, targets){
    let keyObject = {};
    let answer = [];
    
    // 각 알파벳의 최솟값을 구해 객체에 넣음
    keymap.forEach((x) => {
        x.split('').map((v, i) => {
            if(keyObject[v] === undefined){
                keyObject[v] = i+1;
            } else {
                keyObject[v] = Math.min(keyObject[v], i+1);
            }
        })
    })
    
    // 타겟배열을 순환하면서 횟수를 기록하고 answer 배열에 넣음  
    for(let i = 0; i < targets.length; i++){
        let sum = 0;
        let isPossible = true;
        
        targets[i].split('').map((v) => {
            if(keyObject[v] === undefined){
                isPossible = false;
            } else {
                sum += keyObject[v];
            }
        })
        
        isPossible ? answer.push(sum) : answer.push(-1);
    }
    
    return answer
}