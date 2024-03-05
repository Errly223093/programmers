function solution(s) {
    s = s.split('');
    let word;
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s.length === 1) return ++answer;
        word = s[i];
        let cnt = 1;
        let cnt2 = 0;
        
        // "aaabbaaabbaaacc" 9:6
        for(let j = i+1; j < s.length; j++){
            if(cnt === cnt2){
                break;
            } else if(word === s[j]){
                cnt++;
            } else {
                cnt2++;
            }
        }
        
        if(cnt === cnt2){
            s.splice(i, (cnt * 2));
            answer++;
            i = -1;
            if(s.length === 0) return answer;
        } else {
            return ++answer
        }
    }
    
    return answer
}