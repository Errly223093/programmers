function solution(s) {
    let answer = [-1];
    s = s.split('');

    for(let i = 1; i < s.length; i++){
        let lastidx = [];
        for(let j = 0; j < i; j++){
            if(s[i] === s[j]){
                lastidx.push(j);
            }
        }
        lastidx.length === 0 ? answer.push(-1) : answer.push(i - Math.max(...lastidx));
    }
    return answer
}