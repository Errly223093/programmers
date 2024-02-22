function solution(k, m, score) {
    // 3
    // 4
    // [3,3,2,2,1,1,1]
    
    score.sort((a,b) => b-a);
    let count = Math.floor(score.length / m);
    let box = [];
    let answer = 0;
    
    for(let i = 0; i < count * m; i += m){
        let c = 0;
        let arr = [];
        while(c < m){
            arr.push(score[i+c]);
            c++;
        }
        arr.length === m ? answer += (Math.min(...arr) * m) : null;
    }
    
    return answer
}